import { useEffect, useState } from "react";
import ArrowLeftIcon from "../assets/ArrowLeftIcon";
import { useNavigate } from "react-router";

export const RunExample = ({
  title,
  onRun,
}: {
  title: string;
  onRun: () => Promise<any[]>;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when entering page
  }, []);

  const onClick = async () => {
    setResult("");
    setErrMsg("");
    setIsLoading(true);
    try {
      const res = await onRun();
      setResult(
        JSON.stringify(
          res,
          (_, val) =>
            typeof val === "bigint" ? `BigInt(${val.toString()})` : val,
          2
        )
      );
    } catch (error) {
      setErrMsg(JSON.stringify(error, null, 2));
    } finally {
      setIsLoading(false);
    }
  };
  const isShowClass = errMsg || result;

  return (
    <div className="box-button">
      <ArrowLeftIcon
        onClick={() => {
          navigate(-1);
        }}
      />
      <button
        disabled={isLoading}
        className={`button-run ${isLoading ? "loading" : ""}`}
        onClick={onClick}
      >
        {isLoading ? "" : "Run"}
      </button>
      <div className={`${isShowClass ? "box-result" : ""}`}>
        <pre>{result}</pre>
        <pre>{errMsg}</pre>
      </div>
    </div>
  );
};
