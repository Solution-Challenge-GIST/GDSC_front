# GDSC Solution Challenge FE Prototype (~2022/3/31)

## Tech Stack

Expo(React Native), react-query, axios

## How to run

1. `npm install --global expo-cli`
2. `npm i`
3. `expo start`
4. go http://localhost:19002/
5. if you want run this on your device. turn on your camera and read qr code. (your phone need to install Expo go App)
   5-1. if you are not in same network connection change with `Tunnel`.

6. if you already set simulator, `run on IOS simulato`r or `Run on Android device/emulator`

you can change demo user by changing token in App.tsx (we set 2 tokens. one is junior and one is senior)

## Demo Video

https://www.youtube.com/watch?v=LrO6cmoMTF4

## References

[Design source](https://www.figma.com/file/n39SVVbKCyafDB08HDKd22/Untitled?node-id=82%3A2)

## Todo

- [x] navigate to Home when create Album
- [x] refetch detail but isReplied not change need fix
- [ ] set Status Bar style dark
- [ ] junior album contents empty now design change need ( because of empty memo)
