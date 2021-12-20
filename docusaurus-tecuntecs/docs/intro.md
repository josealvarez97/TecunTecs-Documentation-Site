---
sidebar_position: 1
---

# TecunTecs Intro

Any software library is an **Application Programming Interface (API)**. It abstracts a set of programming tasks as a set of short commands. 
The **TecunTecs API** is like any other software library, but on the cloud.

We believe there exists a gap between the technological stack currently used to
solve **applied engineering problems** and the technological potential 
to implement a **unified suite of features** to empower the analysis by making it 
more interactive, accessible, and uncomplicated. 


**TecunTecs Cloud Platform** translates the knowledge of the experts in the 
field of **Computational Engineering** into a
powerful and scalable **easy-to-use solution**.

## Call the web API

The TecunTecs API is language-agnostic, which allows you to leverage its power
from any of your favorite programming languages whenever you need it.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="js" label="JavaScript">

```js
// Node.js
const fetch = require("node-fetch");

const solveHeatEquation = async (parameterSet) => {
  const res = await fetch("https://api.tecuntecs.com/solve-pde/heat-equation", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(parameterSet),
  });

  const data = res.json();
  return data;
};

solveHeatEquation({
  heat_x_0: 0,
  heat_x_max: 0,
  f_0: "lambda x: sin(pi*x/1)",
  alpha: 0.1,
  Nx: 20,
  x_max: 1,
  Mt: 20,
  t_max: 1,
}).then((result) => console.log(result));

//Output
// {
//   resultsZip: 'https://storage.googleapis.com/tcp-uniform-storage-bucket/zip/heat_equation.zip',
//   resultsPng: 'https://storage.googleapis.com/tcp-uniform-storage-bucket/zip/heat_equation.png'
// }

```

</TabItem>
<TabItem value="py" label="Python">

```py
import requests
parameterSet = {
  "heat_x_0": 0,
  "heat_x_max": 0,
  "f_0": "lambda x: sin(pi*x/1)",
  "alpha": 0.1,
  "Nx": 20,
  "x_max": 1,
  "Mt": 20,
  "t_max": 1
}
r = requests.post('https://api.tecuntecs.com/solve-pde/heat-equation', 
                    json = parameterSet)
print(r.json())

# Output
# {'resultsZip': 'https://storage.googleapis.com/tcp-uniform-storage-bucket/zip/heat_equation.zip', 'resultsPng': 'https://storage.googleapis.com/tcp-uniform-storage-bucket/zip/heat_equation.png'}
```

</TabItem>
</Tabs>



## Use it anywhere from your phone

Our interactive interface has been designed to perfectly fit into all mobile 
devices.

import TecunTecsBeamCalculatorImg from '@site/static/img/TecunTecs-Beam-Calculator.jpeg';

<img src={TecunTecsBeamCalculatorImg} width="200" class="center"/>;
