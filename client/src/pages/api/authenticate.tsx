// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.setHeader('Cache-Control', 'no-store')

    const {token} = req.cookies
    if (!token) {
        return res.json({logged_in: false, user_info: {}})
    }

    return res.json({logged_in: true, user_info: {}})
}
