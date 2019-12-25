<template>
    <div>
        <div class="style_questionitem__3ETlC">
            <h4>找出考试结果数组中排名前三的学生  <a href="" style="float:right">删除</a> </h4>
            <div class="react-markdown">
                <p>使用一个循环找出考试结果数组中排名前三的学生</p>
                <pre>
                    <code>
                        var types = ["红桃", "黑桃", "方块", "梅花"]; // 花色
                        var points = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]; // 点数
                        var cards = ["大王", "小王"]; // 所有扑克牌
                    </code>
                </pre>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped >
    .style_questionitem__3ETlC{
        text-align: left;
        border: 1px solid #ccc;
        padding: 20px;
        margin-bottom: 20px;
    }
    .style_questionitem__3ETlC h4{
        height:20.8px;
        color:rgba(0,0,0,0.85);
        font-size:14px;
    }
    .style_questionitem__3ETlC h4 a{
        touch-action: manipulation;
        color: #0139FD;
        background-color: transparent;
        text-decoration: none;
        outline: none;
        cursor: pointer;
        transition: color 0.3s;
    }
    .react-markdown{
        line-height: 1.6;
        word-wrap: break-word;
    }
    .react-markdown p{
        height:22.4px;
        color:rgba(0,0,0,0.65);
        font-size:14px;
        margin:0 0 21px;
    }
    .react-markdown pre{
        display: block;
        padding: 14px;
        overflow: auto;
        line-height: 1.3;
        max-height: 35em;
        color: #657b83;
        background-size: 30px 30px;
    }
    .react-markdown pre code{
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
        font-size: 14px;
    }
</style>