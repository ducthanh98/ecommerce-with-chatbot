// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import {serialize} from "cookie";

export default (req, res) => {
    res.setHeader('Cache-Control', 'no-store')
    res.setHeader('Set-Cookie', serialize('token', '', {maxAge: -1, httpOnly: true, sameSite: 'lax', path: '/'}))

    return res.redirect(301, '/?expired=true')
}
