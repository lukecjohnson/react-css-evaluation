# React CSS Evaluation

## CSS Modules
- [Documentaion](https://github.com/css-modules/css-modules)

- Class names and selectors are locally scoped by default

- At build time, class names are transformed to generated, unique names
  - Example: `.Button` my be transformed to `._Button_7a7j2_1`

- Imported CSS Modules files export an object with class name mappings that can be used in JSX/TSX
  ```jsx
  import styles from './button.module.css';

  function Button() {
    return (
      <button className={ styles.Button }>
    );
  }
  ```

- camelCase or PascalCase is often recommended for easier access with dot notation
  - Example: `styles.TaskList` vs `styles['task-list']`

- Can be used with Sass and other pre-processors