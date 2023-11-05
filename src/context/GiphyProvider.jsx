import { createContext, useState } from "react";
import { giphyApi } from "../services/apiGif";
import PropTypes from 'prop-types';

const GiphyContext = createContext()

const GiphyProvider = ({ children }) => {
    const [gif, setGif] = useState([])

    const getGifGiphy = async () => {
        const link = await giphyApi()
        return setGif(link)
    }
    const contextValues = {
        gif,
        getGifGiphy
    }
    return (
        <GiphyContext.Provider value={contextValues}>
            {children}
        </GiphyContext.Provider>
    )
}
GiphyProvider.propTypes = {
    children: PropTypes.node.isRequired
}


export { GiphyContext, GiphyProvider }