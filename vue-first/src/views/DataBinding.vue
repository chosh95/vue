<template>
    <h1>Hello, {{ title }}!</h1>
    <div>{{ htmlString }}</div>
    <div v-html="htmlString"></div>
    <div>
        <input type="text" v-model="inputText"/><br>
        <textarea v-model="inputTextArea"/><br>
        <input type="number" v-model="inputNumber"/><br>
    </div>
    <br><br><br>
    <div>
        <select v-model="selectedValue" @change="changeSelect">
            <option value="서울">서울</option>
            <option value="대구">대구</option>
            <option value="강릉">강릉</option>
        </select>
    </div>
    <br><br><br>
    <div>
        <label><input type="checkbox" value="서울" v-model="inputCheckBox">서울</label><br>
        <label><input type="checkbox" value="대구" v-model="inputCheckBox">대구</label><br>
        <label><input type="checkbox" value="강릉" v-model="inputCheckBox">강릉</label><br>
        <span>체크한 지역: {{ inputCheckBox }}</span><br>
    </div>
    <br><br><br>
    <div>
        <table v-if="productList.length > 3">
            <thead>
            <tr>
                <th>제품명</th>
                <th>가격</th>
                <th>구분</th>
            </tr>
            </thead>
            <tbody>
            <tr :key="i" v-for="(product, i) in productList">
                <td>{{ product.productName }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.category }}</td>
            </tr>
            </tbody>
        </table>
    </div>
    <br><br><br>
    <div>
        <button type="button" @click="increaseCounter">Add 1</button>
        <p>The counter is : {{ counter }}</p>
    </div>

    <div>
        <table>
            <thead>
            <tr>
                <th>제품명</th>
                <th>가격</th>
                <th>구분</th>
                <th>배송료</th>
            </tr>
            </thead>
            <tbody>
            <tr :key="i" v-for="(product, i) in apiProductList">
                <td>{{ product.product_name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.delivery_price }}</td>
            </tr>
            </tbody>
        </table>
    </div>
    <br><br><br>
</template>
<script>
export default {
    name: 'DataBinding',
    components: {},
    data() {
        return {
            title: 'World',
            htmlString: '<p style="color:red;">This is red string.</p>',
            inputText: 'input Text',
            inputTextArea: '여러 줄의 텍스트를 입력할 수 있는 텍스트 영역',
            inputNumber: 3,
            inputCheckBox: [],
            productList: [
                {"productName": "키보드", "price": 2000, "category": "노트북"},
                {"productName": "마우스", "price": 3000, "category": "노트북"},
                {"productName": "모니터", "price": 5000, "category": "노트북"},
                {"productName": "스피커", "price": 4000, "category": "노트북"},
            ],
            counter: 0,
            selectedValue: '서울',
            apiProductList: []
        };
    },
    methods: {
        increaseCounter() {
            this.counter++;
        },
        changeSelect() {
            alert(this.selectedValue);
        },
        async getList() {
            this.apiProductList = await this.$api(
                "https://1fac708f-b64f-43c3-a690-9191bddb15a2.mock.pstmn.io/list", "get"
            );
        }
    },
    created() {
        this.getList();
    }
}
</script>
<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
</style>
