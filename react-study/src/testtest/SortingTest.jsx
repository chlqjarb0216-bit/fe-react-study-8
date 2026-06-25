import dataset from "../../../../first-project/src/datas/dataset.json";

console.log(dataset);
dataset.sort((a, b) => {
    return b.id - a.id;
});
console.log(dataset);

function SortingTest() {
    return <div></div>;
}

export default SortingTest;
