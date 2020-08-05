const createMockData = (params) => {
  const create = (_, index) => ({name: `rose${index}`, id: index, details: {img: `https://www.baidu.com/images/${params}/${index}`}})
  return Array.from({length: 20}, create)
}
export default (params) => ({
  ok: 1,
  code: 200,
  result: createMockData(params)
})