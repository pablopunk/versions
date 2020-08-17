import whatVersion from 'what-version'

export default async function node(req, res) {
  let result = ''

  if (Array.isArray(req.query.search) && req.query.search.length === 2 && req.query.search[1] === 'latest') {
    result = (await whatVersion('node', req.query.search[0]))[0]
  } else {
    result = (await whatVersion('node', req.query.search || '')).join('\n')
  }

  res.end(result)
}
