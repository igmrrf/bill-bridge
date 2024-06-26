import Svg, { Path } from "react-native-svg";

const BuyIcon = ({
    color,
    size,
}: {
    color?: string;
    size?: { width: string; height: string };
}) => {
    return (
        <>
            <Svg
                width={size ? size.width : "28"}
                height={size ? size.height : "28"}
                viewBox="0 0 24 24"
                fill="none"
            >
                <Path
                    d="M15.244 21.366C15.043 21.567 14.8044 21.7265 14.5418 21.8353C14.2792 21.9441 13.9978 22.0001 13.7135 22.0001C13.4292 22.0001 13.1478 21.9441 12.8852 21.8353C12.6226 21.7265 12.384 21.567 12.183 21.366L3.634 12.817C3.22815 12.4112 3.00009 11.8609 3 11.287V5.163C3 3.97 3.97 3 5.164 3H11.287C11.86 3 12.411 3.228 12.817 3.634L21.366 12.183C21.567 12.384 21.7265 12.6226 21.8353 12.8852C21.9441 13.1478 22.0001 13.4292 22.0001 13.7135C22.0001 13.9978 21.9441 14.2792 21.8353 14.5418C21.7265 14.8044 21.567 15.043 21.366 15.244L15.244 21.366Z"
                    stroke={color ? color : "#000000"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M6.5 6.5L7 7"
                    stroke={color ? color : "#000000"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </Svg>
        </>
    );
};

export default BuyIcon;
