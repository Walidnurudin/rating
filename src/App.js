import { useState } from 'react';

function App() {
  const [penilaian, setPenilaian] = useState([
    {
      penilaian_1: 1,
      penilaian_2: 1,
      penilaian_3: 1,
      penilaian_4: 1
    },
    {
      penilaian_1: 1,
      penilaian_2: 1,
      penilaian_3: 1,
      penilaian_4: 1
    },
    {
      penilaian_1: 1,
      penilaian_2: 1,
      penilaian_3: 1,
      penilaian_4: 1
    },
    {
      penilaian_1: 1,
      penilaian_2: 1,
      penilaian_3: 1,
      penilaian_4: 1
    },
    {
      penilaian_1: 1,
      penilaian_2: 1,
      penilaian_3: 1,
      penilaian_4: 1
    },
    {
      penilaian_1: 1,
      penilaian_2: 1,
      penilaian_3: 1,
      penilaian_4: 1
    },
    {
      penilaian_1: 1,
      penilaian_2: 1,
      penilaian_3: 1,
      penilaian_4: 1
    },
    {
      penilaian_1: 1,
      penilaian_2: 1,
      penilaian_3: 1,
      penilaian_4: 1
    },
    {
      penilaian_1: 1,
      penilaian_2: 1,
      penilaian_3: 1,
      penilaian_4: 1
    },
    {
      penilaian_1: 1,
      penilaian_2: 1,
      penilaian_3: 1,
      penilaian_4: 1
    }
  ]);

  const [result, setResult] = useState('');

  const handleValue = (e, index, rat) => {
    let newData = structuredClone(penilaian);

    newData[index][rat] = e.target.value;

    setPenilaian(newData);
  };

  const blurValue = (e, index, rat) => {
    let newData = structuredClone(penilaian);

    newData[index][rat] =
      newData[index][rat] <= 0
        ? 1
        : newData[index][rat] >= 10
        ? 10
        : newData[index][rat];

    setPenilaian(newData);
  };

  const handleSubmit = () => {
    let newData = structuredClone(penilaian);

    let res = {
      aspek_penilaian_1: {},
      aspek_penilaian_2: {},
      aspek_penilaian_3: {},
      aspek_penilaian_4: {}
    };

    newData.map((item, index) => {
      res.aspek_penilaian_1[`mahasiswa_${index + 1}`] = item.penilaian_1;

      res.aspek_penilaian_2[`mahasiswa_${index + 1}`] = item.penilaian_2;

      res.aspek_penilaian_3[`mahasiswa_${index + 1}`] = item.penilaian_3;

      res.aspek_penilaian_4[`mahasiswa_${index + 1}`] = item.penilaian_4;
    });

    setResult(res);
  };

  return (
    <div style={{ padding: '30px' }}>
      <div style={{ display: 'flex', marginLeft: '90px', gap: '40px' }}>
        <div></div>
        <div>Aspek Penilaian 1</div>
        <div>Aspek Penilaian 2</div>
        <div>Aspek Penilaian 3</div>
        <div>Aspek Penilaian 4</div>
      </div>

      {penilaian?.map((item, index) => (
        <div
          style={{
            display: 'flex',
            gap: '10px',
            padding: '10px'
          }}
          key={index}
        >
          <div
            style={{
              borderBottom: '1px solid black'
            }}
          >
            Mahasiswa {index + 1}
          </div>
          <div>
            <input
              type="number"
              onBlur={(e) => blurValue(e, index, 'penilaian_1')}
              value={item.penilaian_1}
              onChange={(e) => handleValue(e, index, 'penilaian_1')}
            />
          </div>
          <div>
            <input
              type="number"
              value={item.penilaian_2}
              onBlur={(e) => blurValue(e, index, 'penilaian_2')}
              onChange={(e) => handleValue(e, index, 'penilaian_2')}
            />
          </div>
          <div>
            <input
              type="number"
              value={item.penilaian_3}
              onBlur={(e) => blurValue(e, index, 'penilaian_3')}
              onChange={(e) => handleValue(e, index, 'penilaian_3')}
            />
          </div>
          <div>
            <input
              type="number"
              value={item.penilaian_4}
              onBlur={(e) => blurValue(e, index, 'penilaian_4')}
              onChange={(e) => handleValue(e, index, 'penilaian_4')}
            />
          </div>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          margin: '5px'
        }}
      >
        Simpan
      </button>

      <p style={{ margin: '30px' }}>RESULT : </p>
      <div style={{ margin: '30px' }}>
        {result ? JSON.stringify(result, null, 2) : 'no data'}
      </div>
    </div>
  );
}

export default App;
