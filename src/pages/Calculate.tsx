import { Button} from "antd";


export const Calculate = () => {
  const onToggleSum = async () => {
    import("../helper/sum").then((module: any) => {
      alert(module.sum(1, 1));
    });
  };

  const onToggleSum2 = async () => {
    const sum = await import("../helper/sum").then((module) => module.sum);
    alert(sum(8, 8));
  };

  return (
    <>
      <h1>Calculate Page</h1>
      <div style={{ display: 'flex', columnGap: 10}}>
      <Button onClick={onToggleSum}>Sum 1 + 1</Button>
      <Button onClick={onToggleSum2}>Sum 8 + 8</Button>
      </div>
    </>
  );
};
