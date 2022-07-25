import { RFPercentage as responsive } from 'react-native-responsive-fontsize';

export default {
    padding: {
        XXS: `${responsive(1)}px`, //8px
        XS: `${responsive(1.5)}px`, //12px
        SM: `${responsive(2)}px`, //16px
        MD: `${responsive(3)}px`, //24px
        LG: `${responsive(4)}px`, //32px
    },

    margin: {
        XXXS: `${responsive(0.5)}px`, //5px
        XXS: `${responsive(1)}px`, //8px
        XS: `${responsive(1.5)}px`, //12px
        SM: `${responsive(2)}px`, //16px
        MD: `${responsive(3)}px`, //24px
        LG: `${responsive(4)}px`, //32px
    },

    fontSize: {
        SM: `${responsive(2)}px`, //16px
        XMD: `${responsive(2.2)}px`, //18px
        MD: `${responsive(3)}px`, //24px
    },

    colors: {
        PRIMARY: '#1D428A',

        //B
        BLACK: '#000000',
        //W
        WHITE: '#FFFFFF',

        //G
        GRAY: '#EEEEEE',

        //O
        ORANGE: '#FFA500'
    }
}