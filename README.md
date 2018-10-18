## 报错问题

* 编译失败问题1
```
Unrecognized font family 'Ionicons' 
```

如果出现这个错误 在根目录下运行
```
react-native link react-native-vector-icons

watchman watch-del-all && npm start --reset-cache
```