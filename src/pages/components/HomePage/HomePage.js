import { React, useEffect, useState } from "react";
import "./homePage.css";
import { gsap } from "gsap";
import config from "../../../../public/data.json";
import Image from "next/image";

const HomePage = () => {
  const handleClick = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`Clicked at x: ${x}, y: ${y}`);
  };

  const tl = gsap.timeline();

  useEffect(() => {
    // group together initial window movements (hacky? maybe. works? yes.)
    tl.addLabel("initWindows");
    tl.to(
      "#editor-window",
      {
        y: 45,
        x: 30,
        duration: 0.01,
        scaleX: 0,
        scaleY: 0,
        transformOrigin: "50% 100%",
      },
      ""
    );
    tl.to(
      "#app-window",
      {
        x: -100,
        y: 20,
        duration: 0.01,
        scaleX: 0,
        scaleY: 0,
        transformOrigin: "50% 100%",
      },
      ""
    );

    // turn on computer
    tl.to(".computer-screen", { fill: "#f6f9fd", duration: 1, delay: 1 });

    // slam all those books on your desk that you'll never read
    tl.to("#bottom-book", { y: 0, ease: "none", duration: 0.25 });
    tl.to("#middle-book", { y: 0, ease: "none", duration: 0.25 });
    tl.to("#new-book", { y: 0, ease: "none", duration: 0.5 });
    tl.to("#top-book", { y: 0, ease: "none", duration: 0.25 });
    tl.to("#name-box", { x: 0, ease: "none", duration: 0.5 });

    // drop the cup and pencils
    tl.to("#cup", { y: 0, ease: "none", duration: 0.25 });
    tl.to("#pencil1", { y: 0, ease: "bounce.out", duration: 0.3 });
    tl.to("#pencil2", { y: 0, ease: "bounce.out", duration: 0.3 });

    // // open computer windows
    tl.to("#editor-window", {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 0.7,
      scaleX: 1,
      scaleY: 1,
      transformOrigin: "50% 100%",
    });
    tl.to("#app-window", {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.7,
      scaleX: 1,
      scaleY: 1,
      transformOrigin: "50% 100%",
    });
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div className="svg-box">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns=""
          xmlnsXlink=""
          x="0px"
          y="0px"
          viewBox="0 300 1000 400"
        >
          <path
            id="desk"
            className="st0"
            d="M789.5,666.3H169.2c-5,0-9-4-9-9l0,0c0-5,4-9,9-9h620.3c5,0,9,4,9,9l0,0
                    C798.5,662.3,794.5,666.3,789.5,666.3z"
          />

          <g className="svg-wrapper" id="name-box">
            <rect
              id=""
              x="45"
              y="414"
              className="shape"
              width="350"
              height="46.7"
            ></rect>
            <text
              x="100"
              y="435"
              fontSize="15"
              fill="black"
              className="text-space-4  uppercase font-monster"
            >
              {config.name}
            </text>
            <text
              x="166"
              y="451"
              fontSize="10"
              fill="black"
              className="text-space-2  text font-monster"
            >
              {config.postion}
            </text>
          </g>

          <g id="top-book">
            {/* // these are line inside books */}
            <line
              id="XMLID_164_"
              className="st3"
              x1="279.5"
              y1="503.6"
              x2="383.9"
              y2="503.6"
            />
            <line
              id="XMLID_173_"
              className="st3"
              x1="279.5"
              y1="513.2"
              x2="383.9"
              y2="513.2"
            />
            {/* // this path is for red line in 1st book */}
            <path
              id="XMLID_161_"
              className="st4"
              d="M285.9,525.3c-9.6,0-17.3-7.8-17.3-17.3s7.8-17.3,17.3-17.3h99.7l4-6H285.9
                                                 c-12.9,0-23.3,10.5-23.3,23.3l0,0c0,12.9,10.5,23.3,23.3,23.3h103.7l-4-6H285.9z"
            />
            {/* // this path is for blue color line in 1st book */}
            <path
              id="XMLID_182_"
              className="st3"
              d="M285.9,525.3c-9.6,0-17.3-7.8-17.3-17.3s7.8-17.3,17.3-17.3h99.7l4-6H285.9
                                                 c-12.9,0-23.3,10.5-23.3,23.3l0,0c0,12.9,10.5,23.3,23.3,23.3h103.7l-4-6H285.9z"
            />
            {/* // these is for book shadow */}
            <rect
              id="top-book-computer-shadow"
              x="348.9"
              y="481"
              className="st5"
              width="18.4"
              height="46.7"
            />
          </g>

          <g id="middle-book">
            {/* // this is for green color of middle book */}
            <path
              id="XMLID_157_"
              className="st6"
              d="M200.9,617.8H189c-3.7,0-6.8-3-6.8-6.8v-25c0-3.7,3-6.8,6.8-6.8h189.9c3.7,0,6.8,3,6.8,6.8
                                                 v25C385.7,614.8,382.7,617.8,378.9,617.8z"
            />
            {/* // this is for text of middle book */}
            <text
              x="220"
              y="605.5"
              fontSize="22"
              fill="white"
              style={{ letterSpacing: "2px" }}
            >
              {config.codingLang2}
            </text>
            {/* // this is for blue line outside green box in middle book */}
            <path
              id="XMLID_146_"
              className="st3"
              d="M378.9,617.8H189c-3.7,0-6.8-3-6.8-6.8v-25c0-3.7,3-6.8,6.8-6.8h189.9c3.7,0,6.8,3,6.8,6.8
                                                 v25C385.7,614.8,382.7,617.8,378.9,617.8z"
            />
            {/* // this is for middle book shadow */}
            <path
              id="middle-book-computer-shadow"
              className="st5"
              d="M378.9,579.3h-30v15c0,9.4,7.6,17.1,17.1,17.1h19.7c0-0.1,0-0.2,0-0.3v-25
                                                                  C385.7,582.3,382.7,579.3,378.9,579.3z"
            />
          </g>

          <g id="new-book">
            {/* // this is for yellow color of new book */}
            <path
              id="XMLID_157_"
              className="stYellow"
              d="M378.9,573.8H189c-3.7,0-6.8-3-6.8-6.8v-25c0-3.7,3-6.8,6.8-6.8h189.9c3.7,0,6.8,3,6.8,6.8
                                                 v25C385.7,614.8,382.7,617.8,378.9,617.8z"
            />
            {/* // this is for text of new book */}
            <text
              x="220"
              y="560.5"
              fontSize="22"
              fill="white"
              style={{ letterSpacing: "2px" }}
            >
              {config.codingLang1}
            </text>
            {/* // this is for blue line outside yello of new book */}
            <path
              id="XMLID_146_"
              className="st3"
              d="M378.9,573.8H189c-3.7,0-6.8-3-6.8-6.8v-25c0-3.7,3-6.8,6.8-6.8h189.9c3.7,0,6.8,1,6.8,2.8
                                                 v25C385.7,614.8,382.7,617.8,378.9,617.8z"
            />
            {/* // this is for shadow of new book */}
            <rect
              id="new-book-computer-shadow"
              x="348.9"
              y="525"
              className="st5"
              width="18.4"
              height="46.7"
            />
          </g>

          <g id="bottom-book">
            <path
              id="XMLID_35_"
              className="st1"
              d="M432.4,625.6h-220c1.3,3.2,2,7.2,2,11.4s-0.7,8.1-2,11.4h219.9c-1.3-3.2-2-7.2-2-11.4
                                                C430.4,632.7,431.1,628.8,432.4,625.6z"
            />
            <rect
              id="XMLID_156_"
              x="206.5"
              y="619.5"
              className="st7"
              width="231.9"
              height="6"
            />
            <rect
              id="XMLID_32_"
              x="206.5"
              y="619.5"
              className="st3"
              width="231.9"
              height="6"
            />
            <rect
              id="XMLID_147_"
              x="206.5"
              y="648.3"
              className="st8"
              width="231.9"
              height="6"
            />
            <rect
              id="XMLID_39_"
              x="206.5"
              y="648.3"
              className="st7"
              width="231.9"
              height="6"
            />
            <rect
              id="XMLID_37_"
              x="206.5"
              y="648.3"
              className="st3"
              width="231.9"
              height="6"
            />
            <line
              id="XMLID_145_"
              className="st3"
              x1="214.9"
              y1="632.5"
              x2="430.4"
              y2="632.5"
            />
            <line
              id="XMLID_151_"
              className="st3"
              x1="214.9"
              y1="640.5"
              x2="430.4"
              y2="640.5"
            />
            <path
              id="XMLID_158_"
              className="st3"
              d="M432.4,625.6h-220c1.3,3.2,2,7.2,2,11.4s-0.7,8.1-2,11.4h219.9c-1.3-3.2-2-7.2-2-11.4
                                                 C430.4,632.7,431.1,628.8,432.4,625.6z"
            />
          </g>
          <g id="computer">
            <path
              id="XMLID_69_"
              className="st9"
              d="M553.6,633l-3-33.7h-49.4l-3,33.7c-0.7,7.8-5.4,15.3-12.8,21.3v0.1h81v-0.1
                                                C559,648.3,554.3,640.8,553.6,633z"
            />
            <polygon
              id="XMLID_33_"
              className="st5"
              points="501.2,599.3 499.4,619.5 552.4,619.5 550.6,599.3 			"
            />
            <path
              id="XMLID_10_"
              className="st3"
              d="M553.6,633l-3-33.7h-49.4l-3,33.7c-0.7,7.8-5.4,15.3-12.8,21.3v0.1h81v-0.1
                                                C559,648.3,554.3,640.8,553.6,633z"
            />
            <path
              id="XMLID_13_"
              className="st2"
              d="M683.9,604.3h-316c-6.6,0-12-5.4-12-12v-206c0-6.6,5.4-12,12-12h316c6.6,0,12,5.4,12,12v206
                                                C695.9,599,690.5,604.3,683.9,604.3z"
            />
            <path
              id="XMLID_63_"
              className="st9"
              d="M683.9,604.3h-316c-6.6,0-12-5.4-12-12v-206c0-6.6,5.4-12,12-12h316c6.6,0,12,5.4,12,12v206
                                                C695.9,599,690.5,604.3,683.9,604.3z"
            />
            <path
              id="XMLID_4_"
              className="st3"
              d="M683.9,604.3h-316c-6.6,0-12-5.4-12-12v-206c0-6.6,5.4-12,12-12h316c6.6,0,12,5.4,12,12v206
                                               C695.9,599,690.5,604.3,683.9,604.3z"
            />
            <rect
              id="XMLID_68_"
              x="373"
              y="391.3"
              className="computer-screen"
              width="306"
              height="174.6"
            />
            <rect
              id="XMLID_11_"
              x="373"
              y="391.3"
              className="st3"
              width="306"
              height="174.6"
            />
            <line
              id="XMLID_9_"
              className="st3"
              x1="512.5"
              y1="585"
              x2="539.4"
              y2="585"
            />
          </g>
          <g id="editor-window">
            <path
              id="XMLID_15_"
              className="st10"
              d="M590,509.9H400.9c-4.4,0-8-3.6-8-8V353.7c0-4.4,3.6-8,8-8H590c4.4,0,8,3.6,8,8V502
                                                 C598,506.4,594.4,509.9,590,509.9z"
            />
            <path
              id="XMLID_17_"
              className="st3"
              d="M598,365.1H392.9v-11.5c0-4.4,3.6-8,8-8H590c4.4,0,8,3.6,8,8V365.1z"
            />
            <path
              id="XMLID_23_"
              className="st11"
              d="M598,368.9H392.9v-15.3c0-4.4,3.6-8,8-8H590c4.4,0,8,3.6,8,8V368.9z"
            />
            <path
              id="XMLID_18_"
              className="st3"
              d="M598,368.9H392.9v-15.3c0-4.4,3.6-8,8-8H590c4.4,0,8,3.6,8,8V368.9z"
            />
            <path
              id="XMLID_20_"
              className="st3"
              d="M598,368.9H392.9v-15.3c0-4.4,3.6-8,8-8H590c4.4,0,8,3.6,8,8V368.9z"
            />
            <path
              id="XMLID_12_"
              className="st3"
              d="M590,509.9H400.9c-4.4,0-8-3.6-8-8V353.7c0-4.4,3.6-8,8-8H590c4.4,0,8,3.6,8,8V502
                                                C598,506.4,594.4,509.9,590,509.9z"
            />
            <path
              id="editor-window-shadow"
              className="st5"
              d="M383.9,374.3v138.6c0,4.4,3.6,8,8,8H581c4.4,0,8-3.6,8-8V374.3H383.9z"
            />
            <circle id="XMLID_24_" className="st12" cx="413" cy="357.3" r="4" />
            <circle
              id="XMLID_28_"
              className="st12"
              cx="426.9"
              cy="357.3"
              r="4"
            />
            <circle
              id="XMLID_38_"
              className="st12"
              cx="440.8"
              cy="357.3"
              r="4"
            />
            <g id="XMLID_61_">
              <line
                id="XMLID_54_"
                className="st13"
                x1="510.7"
                y1="387.4"
                x2="523.7"
                y2="387.4"
              />
              <line
                id="XMLID_66_"
                className="st14"
                x1="444.8"
                y1="387.4"
                x2="501.1"
                y2="387.4"
              />
              <line
                id="XMLID_29_"
                className="st15"
                x1="417"
                y1="387.4"
                x2="436.8"
                y2="387.4"
              />
            </g>
            <g id="XMLID_42_">
              <line
                id="XMLID_62_"
                className="st15"
                x1="442.8"
                y1="485.9"
                x2="485.8"
                y2="485.9"
              />
              <line
                id="XMLID_30_"
                className="st14"
                x1="417"
                y1="485.9"
                x2="430.9"
                y2="485.9"
              />
            </g>
            <g id="XMLID_27_">
              <line
                id="XMLID_60_"
                className="st13"
                x1="501.1"
                y1="399.7"
                x2="509.2"
                y2="399.7"
              />
              <line
                id="XMLID_45_"
                className="st15"
                x1="464.3"
                y1="399.7"
                x2="491.5"
                y2="399.7"
              />
              <line
                id="XMLID_47_"
                className="st16"
                x1="426.9"
                y1="399.7"
                x2="454.6"
                y2="399.7"
              />
            </g>
            <g id="XMLID_49_">
              <line
                id="XMLID_59_"
                className="st13"
                x1="469.8"
                y1="412"
                x2="493.7"
                y2="412"
              />
              <line
                id="XMLID_50_"
                className="st17"
                x1="439.8"
                y1="412"
                x2="462.3"
                y2="412"
              />
            </g>
            <g id="XMLID_65_">
              <line
                id="XMLID_58_"
                className="st13"
                x1="473"
                y1="424.3"
                x2="477.9"
                y2="424.3"
              />
              <line
                id="XMLID_70_"
                className="st15"
                x1="453.2"
                y1="424.3"
                x2="464.3"
                y2="424.3"
              />
              <line
                id="XMLID_67_"
                className="st14"
                x1="426.9"
                y1="424.3"
                x2="444.8"
                y2="424.3"
              />
            </g>
            <g id="XMLID_73_">
              <line
                id="XMLID_77_"
                className="st16"
                x1="465.3"
                y1="436.7"
                x2="497.2"
                y2="436.7"
              />
              <line
                id="XMLID_74_"
                className="st17"
                x1="426.9"
                y1="436.7"
                x2="455.5"
                y2="436.7"
              />
            </g>
            <g id="XMLID_80_">
              <line
                id="XMLID_64_"
                className="st15"
                x1="502.2"
                y1="449"
                x2="519.5"
                y2="449"
              />
              <line
                id="XMLID_84_"
                className="st17"
                x1="465.3"
                y1="449"
                x2="493"
                y2="449"
              />
              <line
                id="XMLID_81_"
                className="st14"
                x1="439.8"
                y1="449"
                x2="455.5"
                y2="449"
              />
            </g>
            <g id="XMLID_87_">
              <line
                id="XMLID_95_"
                className="st13"
                x1="477.9"
                y1="461.3"
                x2="493"
                y2="461.3"
              />
              <line
                id="XMLID_90_"
                className="st15"
                x1="439.8"
                y1="461.3"
                x2="467.5"
                y2="461.3"
              />
            </g>
            <g id="XMLID_98_">
              <line
                id="XMLID_71_"
                className="st13"
                x1="517.2"
                y1="473.6"
                x2="534.5"
                y2="473.6"
              />
              <line
                id="XMLID_102_"
                className="st16"
                x1="464.3"
                y1="473.6"
                x2="507.8"
                y2="473.6"
              />
              <line
                id="XMLID_99_"
                className="st13"
                x1="426.9"
                y1="473.6"
                x2="454.6"
                y2="473.6"
              />
            </g>
          </g>
          <g id="app-window">
            <path
              id="app-window-shadow"
              className="st5"
              d="M688.7,545.3h-116c-4.4,0-8-3.6-8-8V414.4c0-4.4,3.6-8,8-8h116c4.4,0,8,3.6,8,8
                                                        v122.9C696.7,541.8,693.1,545.3,688.7,545.3z"
            />
            <path
              id="XMLID_16_"
              className="st18"
              d="M696.7,538.3h-116c-4.4,0-8-3.6-8-8V407.4c0-4.4,3.6-8,8-8h116c4.4,0,8,3.6,8,8v122.9
                                                 C704.7,534.8,701.1,538.3,696.7,538.3z"
            />
            <path
              id="XMLID_14_"
              className="st3"
              d="M696.7,538.3h-116c-4.4,0-8-3.6-8-8V407.4c0-4.4,3.6-8,8-8h116c4.4,0,8,3.6,8,8v122.9
                                                C704.7,534.8,701.1,538.3,696.7,538.3z"
            />
            <path
              id="XMLID_75_"
              className="st19"
              d="M679.4,437.5h-81.6c-2.9,0-5.2-2.3-5.2-5.2v-7.8c0-2.9,2.3-5.2,5.2-5.2h81.6
                                                 c2.9,0,5.2,2.3,5.2,5.2v7.8C684.6,435.2,682.3,437.5,679.4,437.5z"
            />
            <g id="XMLID_143_" className="st20">
              <path
                id="XMLID_78_"
                className="st21"
                d="M643.6,466.8H598c-2.9,0-5.2-2.3-5.2-5.2v-7.8c0-2.9,2.3-5.2,5.2-5.2h45.6
                                                   c2.9,0,5.2,2.3,5.2,5.2v7.8C648.7,464.5,646.4,466.8,643.6,466.8z"
              />
              <path
                id="XMLID_79_"
                className="st21"
                d="M679.5,466.8h-17.7c-2.9,0-5.2-2.3-5.2-5.2v-7.8c0-2.9,2.3-5.2,5.2-5.2h17.7
                                                   c2.9,0,5.2,2.3,5.2,5.2v7.8C684.7,464.5,682.4,466.8,679.5,466.8z"
              />
            </g>
            <g id="XMLID_76_">
              <line
                id="XMLID_135_"
                className="st21"
                x1="592.7"
                y1="497.2"
                x2="684.6"
                y2="497.2"
              />
              <line
                id="XMLID_136_"
                className="st21"
                x1="592.7"
                y1="508"
                x2="684.6"
                y2="508"
              />
              <line
                id="XMLID_138_"
                className="st21"
                x1="592.7"
                y1="518.8"
                x2="648.7"
                y2="518.8"
              />
            </g>
          </g>
          <g id="pencil2">
            <rect
              id="XMLID_177_"
              x="722.8"
              y="544.4"
              transform="matrix(0.9932 -0.1166 0.1166 0.9932 -62.7441 88.8106)"
              className="st22"
              width="9.8"
              height="72.6"
            />
            <rect
              id="XMLID_31_"
              x="719"
              y="544.7"
              transform="matrix(0.9932 -0.1166 0.1166 0.9932 -59.0037 88.1486)"
              className="st18"
              width="9.8"
              height="7.4"
            />
            <rect
              id="XMLID_217_"
              x="719"
              y="544.7"
              transform="matrix(0.9932 -0.1166 0.1166 0.9932 -59.0037 88.1486)"
              className="st23"
              width="9.8"
              height="7.4"
            />
            <rect
              id="XMLID_22_"
              x="722.8"
              y="544.4"
              transform="matrix(0.9932 -0.1166 0.1166 0.9932 -62.7441 88.8106)"
              className="st23"
              width="9.8"
              height="72.6"
            />
          </g>
          <g id="pencil1">
            <rect
              id="XMLID_218_"
              x="709.9"
              y="589.5"
              transform="matrix(0.1081 -0.9941 0.9941 0.1081 74.6581 1272.0104)"
              className="st24"
              width="72.6"
              height="9.8"
            />
            <rect
              id="XMLID_214_"
              x="709.9"
              y="589.5"
              transform="matrix(0.1081 -0.9941 0.9941 0.1081 74.6581 1272.0104)"
              className="st25"
              width="72.6"
              height="9.8"
            />
            <rect
              id="XMLID_220_"
              x="746.1"
              y="557.1"
              transform="matrix(0.1081 -0.9941 0.9941 0.1081 110.0664 1246.6968)"
              className="st10"
              width="7.4"
              height="9.8"
            />
            <rect
              id="XMLID_211_"
              x="746.1"
              y="557.1"
              transform="matrix(0.1081 -0.9941 0.9941 0.1081 110.0664 1246.6968)"
              className="st25"
              width="7.4"
              height="9.8"
            />
          </g>
          <g id="cup">
            <polygon
              id="XMLID_26_"
              className="st26"
              points="761.1,654.6 721.8,654.6 715.4,594.4 767.5,594.4 			"
            />
            <polygon
              id="XMLID_233_"
              className="st26"
              points="715.4,594.4 715.5,595.5 755.2,595.5 748.9,654.6 761.1,654.6 767.5,594.4 			"
            />
            <polygon
              id="XMLID_21_"
              className="st3"
              points="761.1,654.6 721.8,654.6 715.4,594.4 767.5,594.4 			"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default HomePage;
