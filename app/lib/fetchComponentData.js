export default function fetchComponentData(dispatch, components, params) {
  console.log('components', components)

  const needs = components.reduce( (prev, current) => {
    return current ? (current.needs || []).concat(prev) : prev
  }, [])

  const promises = needs.map(need => dispatch(need(params)))

  return Promise.all(promises)
}
