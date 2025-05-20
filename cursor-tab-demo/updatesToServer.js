const allBlocks = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    // ...可以自行擴充
  ];

  const rigidControls = {
    voxel: [10, 0, 20], // vx, vy, vz
  };

  const perRow = 2; // 每行有幾個方塊


const [vx, vy, vz] = rigidControls.voxel;

for (let i = 0; i < allBlocks.length; i++) {
  const block = allBlocks[i];
  const x = i % perRow;
  const y = 0;
  const z = Math.floor(i / perRow);


}

console.log(updatesToServer);