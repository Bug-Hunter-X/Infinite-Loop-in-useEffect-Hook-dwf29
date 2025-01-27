```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic; runs only once after the initial render
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```