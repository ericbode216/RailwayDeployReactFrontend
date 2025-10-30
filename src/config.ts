const config = {
    //baseApiUrl: "https://localhost:4000"
    baseApiUrl: "https://railwaydeployhouseapi-production.up.railway.app"
}

const currencyFormatter = Intl.NumberFormat("en-US", {
    style:"currency",
    currency:"USD",
    maximumFractionDigits:0
})

export default config;
export {currencyFormatter};