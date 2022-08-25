module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // "off" or 0 - 关闭规则
    // "warn" or 1 - 将规则视为一个警告
    // "error" or 2 - 将规则视为一个错误

    /**
     * 最佳实践
     */
    eqeqeq: 2, // 强制使用 === 和 !==
    'default-case': 1, // 要求 switch 语句中有 default 分支
    'no-else-return': 1, // 禁止 if 语句中 return 语句之后有 else 块
    'no-empty-function': 1, // 禁止出现空函数
    'no-multi-spaces': 1, // 禁止使用多个空格

    /**
     * 变量声明
     */
    // 'init-declarations': ['error', 'always'], // 声明变量必须赋值

    /**
     * ECMAScript6
     */

    'arrow-spacing': ['error', { before: true, after: true }], // 强制箭头函数的箭头前后使用空格
    'no-var': 2, // 禁止使用 var 声明变量
    'prefer-arrow-callback': 2, // 要求回调函数使用箭头函数
    'prefer-const': 2, // 使用 const 声明那些声明后不再被修改的变量
    'prefer-rest-params': 2, // 要求使用剩余参数而不是 arguments

    /**
     * 风格
     */
    'eol-last': 2, // 要求文件末尾存在空行
    // 对象冒号前禁止空格，冒号后必须空格
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // 关键字（if、else等）前后必须有空格
    'keyword-spacing': ['error', { before: true, after: true }],

    'spaced-comment': ['error', 'always'], // 注释后面必须跟随至少一个空白

    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false
        }
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off' // 关闭any警告
  }
}
