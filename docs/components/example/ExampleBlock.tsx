import dynamic from "next/dynamic";
import { AiFillGithub } from "react-icons/ai";
import { SiStackblitz } from "react-icons/si";

import { SectionHeader } from "../../components/pages/landing/shared/Headings";
import CTAButton from "../../components/pages/landing/shared/CTAButton";
import { examples } from "./generated/exampleComponents.gen";

import "./styles.css";
import "../pages/landing/gradients.css";

const baseGitHubURL = "https://github.com/TypeCellOS/BlockNote/tree/main/";
// const baseCodeSandboxURL =
//   "https://githubbox.com/TypeCellOS/BlockNote/tree/main/";

const baseStackBlitzURL =
  "https://www.stackblitz.com/github/TypeCellOS/BlockNote/tree/main/";

const ThemedExample = dynamic(() => import("./ThemedExample"), {
  ssr: false,
});

export function ExampleBlock(props: {
  name: keyof typeof examples;
  path: string;
  children: any;
  hideCode: boolean;
}) {
  // const example = examplesFlattened.find((e) => e.slug === props.name);
  // if (!example) {
  //   throw new Error("invalid example");
  // }

  return (
    <div className="demo nx-bg-primary-700/5 dark:nx-bg-primary-300/10 mt-6 rounded-lg p-4">
      {!props.hideCode && (
        <div className={"z-10 flex flex-row gap-6 pb-4"}>
          <a
            className={
              "nx-select-none nx-text-gray-600 hover:nx-text-black dark:nx-text-gray-200 dark:hover:nx-text-white flex flex-row items-center gap-1"
            }
            href={`${baseGitHubURL}${props.path}/`}
            target="_blank">
            <AiFillGithub />
            <div className={"text-sm"}>GitHub</div>
          </a>
          <a
            className={
              "nx-select-none nx-text-gray-600 hover:nx-text-black dark:nx-text-gray-200 dark:hover:nx-text-white flex flex-row items-center gap-1"
            }
            href={`${baseStackBlitzURL}${props.path}/`}
            target="_blank">
            <SiStackblitz />
            <div className={"text-sm"}>StackBlitz</div>
          </a>
        </div>
      )}
      <div className={"demo-contents h-96 overflow-auto rounded-lg"}>
        <ThemedExample name={props.name} />
      </div>
      {!props.hideCode ? (
        props.children
      ) : (
        <div
          className={
            "relative flex h-96 flex-col items-center justify-center gap-2"
          }>
          <div className={"absolute h-1/2 w-1/2"}>
            <div className={"cta-glow  h-full w-full"}></div>
          </div>
          <div className={"z-10 flex w-2/3 flex-col items-center"}>
            <SectionHeader>Pro example code</SectionHeader>
            <p className={"text-center text-[#00000080] dark:text-[#FFFFFFB2]"}>
              Get access to the full source code for pro examples by subscribing
              to BlockNote Pro
            </p>
            <div className={"mt-8"}>
              <CTAButton href={"/pricing"} variant={"large"} hoverGlow={true}>
                Get BlockNote Pro
              </CTAButton>
            </div>
          </div>
          {/*  <a*/}
          {/*    className={"nx-text-primary-600 text-4xl font-bold"}*/}
          {/*    href={"/pricing"}>*/}
          {/*    Get BlockNote Pro*/}
          {/*  </a>{" "}*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*  {userType === undefined && (*/}
          {/*    <>*/}
          {/*      or{" "}*/}
          {/*      <button*/}
          {/*        className={"nx-text-primary-600 font-bold"}*/}
          {/*        onClick={async () => {*/}
          {/*          await signIn("github", {});*/}
          {/*        }}>*/}
          {/*        Sign In*/}
          {/*      </button>*/}
          {/*      {" "}*/}
          {/*      <CTAButton href={"/pricing"} variant={"large"} hoverGlow={true}>*/}
          {/*        Get BlockNote Pro*/}
          {/*      </CTAButton>{" "}*/}
          {/*    </>*/}
          {/*  )}*/}
          {/*  to access Pro example code*/}
          {/*</div>*/}
        </div>
      )}
    </div>
  );
}
