import { ProxyAgent, setGlobalDispatcher } from "undici";

if (process.env.HTTP_PROXY) {
    setGlobalDispatcher(new ProxyAgent(process.env.HTTP_PROXY));
    console.log("Proxy فعال شد روی:", process.env.HTTP_PROXY);
}
