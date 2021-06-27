const tagTypes = {
  HTML: 'HTML',
  TEXT: 'TEXT'
}

const childrenTypes = {
  single: 'single',
  many: 'many',
  empty: 'empty'
}

const createTextNode = (text) => ({
  type: 'text',
  tag: null,
  props: null,
  children: text,
  childrenType: childrenTypes.single
})
/**
 * 总结：
 * JSX 是 createElement 的语法糖
 * text 文本节点是 createElement中最小的单位。
 * 可以看到 如果是其他节点 它会递归渲染 并找到层级最深 最后的一个文本节点
 * 文本节点有两种存在方式：
 * 1. createElement 本身就是一个文本节点 createElement(null, null, 'text')
 *    我们可以直接创建出一句话来，无需为它包裹任何标签
 * 2. createElement 的children或嵌套层级更深的children是一个文本节点
 *    类似： <div><button>button text</button></div>
 *    'button text' 就是文本节点
 * 如果遇到上述情况，我们只需要创建一个文本节点 然后append到指定dom中即可
 */
export const createElement = (tag, props, children) => {
  let tagType = null

  if(typeof tag === 'string') {
    tagType = tagTypes.HTML
  }else {
    tagType = tagTypes.TEXT
  }

  let childrenType = null
  if(typeof children === 'string') {
    /**
     * 解释一下为什么只有 children === string的时候需要给children赋值
     * 因为 文本节点是createElement中最小的单位了。渲染到文本节点后就没有需要渲染的节点了
     * 其他两种直接给type赋值 是因为知道 children里面的项 肯定还是由 createElement 创建出来的对象而组成的
     */
    childrenType = childrenTypes.single
    children = createTextNode(children)
  }else if (Array.isArray(children)) {
    childrenType = childrenTypes.many
  }else {
    childrenType = childrenTypes.empty
  }

  return {
    el: null,
    tag,
    tagType,
    props,
    children,
    childrenType
  }
}

const diffProps = (el, key, value) => {
  // props分为两大类：事件类和属性类
  const event = key.split('on')
  if(event.length > 1) {
    const eventKey = event[1].toLowerCase()
    el.addEventListener(eventKey, value)
    return
  }
  switch(key) {
    case 'className':
      el.className = value
      break
    case 'id':
    case 'key':
      el[key] = value
      break
    case 'style':
      for(let styleKey in value) {
        el.style[styleKey] = value[styleKey]
      }
      break
    default:
      el.setAttribute(key, value)
  }
}

const mountedText = (vnode, container) => {
  // 突然想到一种情况，如果在JSX中显示的返回null 那这个节点不应该被创建出来
  if(vnode.childrenType === childrenTypes.empty || vnode.children == null) return
  const textNode = document.createTextNode(vnode.children)
  vnode.el = textNode
  container.appendChild(textNode)
}

const mountedElement = (vnode, container) => {
  let {tag, props, children, childrenType} = vnode
  // el: 当前element的真实dom节点
  const el = document.createElement(tag)
  vnode.el = el

  // 将props所有属性 映射到真实dom上面
  if(props) {
    for(let key in props) {
      diffProps(el, key, props[key])
    }
  }

  if(childrenType === childrenTypes.single) {
    mountedText(children, el)
  }else if(childrenType === childrenTypes.many) {
    children.forEach(childNode => {
      mounted(childNode, el)
    })
  }

  container.appendChild(el)
}

const mounted = (vnode, container) => {
  const {tagType} = vnode
  if(tagType === tagTypes.HTML) {
    mountedElement(vnode, container)
  }else {
    mountedText(vnode, container)
  }
}



export const render = (vnode, container) => {
  if(container.vnode) {
    // 已存在一个渲染过的node tree
    // 这里只需要执行 update来触发 re-render/diff就好
  }else{
    //首次渲染
    mounted(vnode, container)
  }
  container.vnode = vnode
}
