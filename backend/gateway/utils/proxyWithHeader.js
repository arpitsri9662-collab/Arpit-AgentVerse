import proxy from "express-http-proxy"

export const proxyWithHeader = (serviceUrl) => {
    return proxy(serviceUrl, {
        proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
            if (srcReq.user) {
                proxyReqOpts.headers["x-user-id"] = srcReq.user.userId
            }
            return proxyReqOpts
        },
        proxyErrorHandler: (err, res, next) => {
            console.error("PROXY ERROR:", err.message)
            console.error("TARGET SERVICE:", serviceUrl)
            next(err)
        }
    })
}