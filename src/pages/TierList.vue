<template>
    <div class="rewards">
        <h2>Tier List</h2>
        <table>
            <thead>
            <tr>
                <th>min</th>
                <th>max</th>
                <th>percent</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>0</td>
                <td>24999</td>
                <td>20%</td>
            </tr>
            <tr>
                <td>25000</td>
                <td>49999</td>
                <td>60%</td>
            </tr>
            <tr>
                <td>50000</td>
                <td>99999</td>
                <td>160%</td>
            </tr>
            <tr>
                <td>100000</td>
                <td>249999</td>
                <td>400%</td>
            </tr>
            <tr>
                <td>250000</td>
                <td>499999</td>
                <td>1,000%</td>
            </tr>
            <tr>
                <td>500000</td>
                <td>999999</td>
                <td>3,000%</td>
            </tr>
            <tr>
                <td>1000000</td>
                <td>1999999</td>
                <td>8,000%</td>
            </tr>
            <tr>
                <td>2000000</td>
                <td>9999999</td>
                <td>20,000%</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
table {
  margin-top: 10px;
  width: 100%;

  th {
    color: #022C54;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    text-align: start;

  }
  tbody {
  }
  th, td {
    padding: 5px;
  }
  td {
    margin-bottom: 10px;
    color: #022C54;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 100% */
  }
}
</style>