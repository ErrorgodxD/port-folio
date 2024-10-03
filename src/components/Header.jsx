import  { SceneItem } from "scenejs";
import { useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
    useEffect(() => {
        const Text = new SceneItem(
            {
                attribute: {
                    "data-text": [
                        "",
                        "J",
                        "Ja",
                        "Jad",
                        "Jade",
                        "Jaden",
                        "Jaden'",
                        "Jaden's",
                        "Jaden's P",
                        "Jaden's Po",
                        "Jaden's Por",
                        "Jaden's Port",
                        "Jaden's Port",
                        "Jaden's Port f",
                        "Jaden's Port fo",
                        "Jaden's Port fol",
                        "Jaden's Port foli",
                        "Jaden's Port folio",
                        "",
                    ],
                },
            },
            {
                duration: 5,
                selector: ".text",
                iterationCount: "infinite",
            }
        );

        Text.play();

        // 컴포넌트가 언마운트될 때 클린업
        return () => {
            Text.stop();
            Text.destroy();
        };
    }, []);

    return (
        <div className="container">
            <div className="text" data-text=""></div>
        </div>
    );
};

export default Header;
