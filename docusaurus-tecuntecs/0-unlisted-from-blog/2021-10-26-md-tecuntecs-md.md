---
slug: md-tecuntecs-md
title: TTecs MD
authors: [slorber]
tags: [docusaurus]
---

Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).

:::tip

Use the power of React to create interactive blog posts.

```js
<button onClick={() => alert('button clicked!')}>Click me!</button>
```

<button onClick={() => alert('button clicked!')}>DONDE!</button>

:::


```jsx
export function ExampleLive(props) {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Add</button>
            <button onClick={()=>setCount(count-1)}>Subtract</button>
        </div>
        )
}
```

<button onClick={() => alert('button clicked!')}>que!</button>