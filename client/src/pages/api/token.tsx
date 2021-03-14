// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    const {token} = req.cookies
    return res.status(200).json({token})
}
