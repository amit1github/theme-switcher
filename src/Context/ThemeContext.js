 import { createContext } from "react";

 const ThemeContext = createContext(["light", () => {}])

 export default ThemeContext

//  Note: You can pass light only, callback is just for to understand that you can also pass or use callback function there.