import Svg, { Circle, Path, Rect } from "react-native-svg";

const BuyAirtimeIcon = ({
    color,
    size,
}: {
    color?: string;
    size?: { width: string; height: string };
}) => {
    return (
        <>
            <Svg
                width={size ? size.width : "24"}
                height={size ? size.height : "24"}
                viewBox="0 0 24 24"
                fill="none"
            >
                <Circle cx="13" cy="14" r="10" fill="#D9D9D9" />
                <Path
                    d="M20.557 5.59453L18.0609 3.10078C17.7562 2.79609 17.3484 2.625 16.9172 2.625C16.4859 2.625 16.0781 2.79375 15.7734 3.10078L13.0852 5.78437C12.7805 6.08906 12.6094 6.49922 12.6094 6.93047C12.6094 7.36406 12.7781 7.76953 13.0852 8.07656L15.1852 10.1789C14.7068 11.2936 14.0194 12.3063 13.1602 13.1625C12.3 14.0273 11.2945 14.7094 10.1789 15.1922L8.07891 13.0898C7.77422 12.7852 7.36641 12.6141 6.93516 12.6141C6.72244 12.6133 6.51172 12.655 6.31532 12.7366C6.11892 12.8183 5.9408 12.9384 5.79141 13.0898L3.10078 15.7734C2.79609 16.0781 2.625 16.4883 2.625 16.9195C2.625 17.3531 2.79375 17.7586 3.10078 18.0656L5.59453 20.5594C6.11484 21.0797 6.83203 21.3773 7.56797 21.3773C7.72031 21.3773 7.86797 21.3656 8.01797 21.3398C11.1211 20.8289 14.2008 19.1766 16.6875 16.6922C19.1719 14.2031 20.8219 11.1234 21.3375 8.01797C21.4852 7.13672 21.1898 6.22969 20.557 5.59453ZM19.6758 7.73906C19.2188 10.5023 17.7328 13.2586 15.4945 15.4969C13.2562 17.7352 10.5023 19.2211 7.73906 19.6781C7.39219 19.7367 7.03594 19.6195 6.78281 19.3687L4.33359 16.9195L6.93047 14.3203L9.73828 17.1328L9.75937 17.1539L10.2656 16.9664C11.8006 16.402 13.1945 15.5107 14.3508 14.354C15.507 13.1974 16.3979 11.8032 16.9617 10.268L17.1492 9.76172L14.318 6.93281L16.9148 4.33359L19.3641 6.78281C19.6172 7.03594 19.7344 7.39219 19.6758 7.73906Z"
                    fill="black"
                />
            </Svg>
        </>
    );
};

export default BuyAirtimeIcon;