const express = require('express'); //express를 불러온다.
const bodyParser = require('body-parser');//서버모듈을 위한기능까지 다선언할 수 있도록 만들어준다.
const app = express();//서버모듈을 위한기능까지 다선언할 수 있도록 만들어준다.
const port = process.env.PORT || 5000; //서버포트는 5000번 포트로 열어준다.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/products',(req,res)=>{
    res.send([
        {
          'p_picture': 'https://placeimg.com/300/300/1',
          'p_name': '반다나 블라우스',
          'p_price': '24000원',
        },
        {
          'p_picture': 'https://placeimg.com/300/300/2',
          'p_name': '꽃무늬 롱스커트',
          'p_price': '20000원',
        },
        {
          'p_picture': 'https://placeimg.com/300/300/3',
          'p_name': '루앤스커트',
          'p_price': '21000원',
        }
      ]);
})
app.listen(port, () => console.log(`Listening on port ${port}`));