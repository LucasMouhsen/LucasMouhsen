import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import apiGif from "../services/apiGif";

const GiphyContext = createContext();

const GiphyProvider = ({ children }) => {
    const [gif, setGif] = useState(null);

    const getGifGiphy = async () => {
        try {
            const data = await apiGif();
            setGif(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        console.log("GiphyProvider useEffect");
        getGifGiphy();
    }, []);

    const contextValues = {
        gif,
    };

    return (
        <GiphyContext.Provider value={contextValues}>
            {children}
        </GiphyContext.Provider>
    );
};

GiphyProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export { GiphyContext, GiphyProvider };
