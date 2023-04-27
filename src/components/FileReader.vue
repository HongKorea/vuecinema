<template>
  <div>
    <ul class="line" v-if="letters.length > 0">

      <ul v-if="Object.keys(movie).length > 0">
        <li class="filme" v-if="Object.keys(movie).length > 0">{{Object.values(movie)[0][0]}}</li>
          <ul v-if="Object.keys(movie).length > 0 " class="indicativa">
            <li v-if=" Object.values(movie)[0][1] !== '0 '">{{Object.values(movie)[0][1]}}</li>
            <li v-else class="L">{{ 'L' }}</li>
          </ul>

          <ul class="sessao">
            <li v-if="Object.keys(movie).length > 0 && Object.values(movie)[0][2] == 'NO'" class="tipo">{{'2D'}}</li>
            <li v-else class="tipo">{{ Object.values(movie)[0][2] }}</li>
          </ul>
      
          <ul class="horarioBox" v-if="Object.keys(movie).length > 0 && (Object.values(movie)[0][3] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 0">{{Object.values(movie)[0][3]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 0 && Object.values(movie)[0][4] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 0 && (Object.values(movie)[0][5] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 0">{{Object.values(movie)[0][5]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 0 && Object.values(movie)[0][6] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 0 && (Object.values(movie)[0][7] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 0">{{Object.values(movie)[0][7]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 0 && Object.values(movie)[0][8] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 0 && (Object.values(movie)[0][9] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 0">{{Object.values(movie)[0][9]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 0 && Object.values(movie)[0][10] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 0 && (Object.values(movie)[0][11] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 0">{{Object.values(movie)[0][11]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 0 && Object.values(movie)[0][12] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 0 && (Object.values(movie)[0][13] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 0">{{Object.values(movie)[0][13]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 0 && Object.values(movie)[0][14] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 0 && (Object.values(movie)[0][15] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 0">{{Object.values(movie)[0][15]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 0 && Object.values(movie)[0][16] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>
      </ul>

      <ul>
        <li class="filme" v-if="Object.keys(movie).length > 1">{{Object.values(movie)[1][0]}}</li>
          <ul v-if="Object.keys(movie).length > 1 " class="indicativa">
            <li v-if=" Object.values(movie)[1][1] !== '0 '">{{Object.values(movie)[1][1]}}</li>
            <li v-else>{{ 'L' }}</li>
          </ul>

          <ul class="sessao">
            <li v-if="Object.keys(movie).length > 1 && Object.values(movie)[1][2] == 'NO'" class="tipo">{{'2D'}}</li>
            <li v-else class="tipo">{{ Object.values(movie)[1][2] }}</li>
          </ul>
      
          <ul class="horarioBox" v-if="Object.keys(movie).length > 1 && (Object.values(movie)[1][3] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 1">{{Object.values(movie)[1][3]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 1 && Object.values(movie)[1][4] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 1 && (Object.values(movie)[1][5] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 1">{{Object.values(movie)[1][5]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 1 && Object.values(movie)[1][6] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 1 && (Object.values(movie)[1][7] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 1">{{Object.values(movie)[1][7]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 1 && Object.values(movie)[1][8] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 1 && (Object.values(movie)[1][9] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 1">{{Object.values(movie)[1][9]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 1 && Object.values(movie)[1][10] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 1 && (Object.values(movie)[1][11] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 1">{{Object.values(movie)[1][11]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 1 && Object.values(movie)[1][12] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 1 && (Object.values(movie)[1][13] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 1">{{Object.values(movie)[1][13]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 1 && Object.values(movie)[1][14] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 1 && (Object.values(movie)[1][15] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 1">{{Object.values(movie)[1][15]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 1 && Object.values(movie)[1][16] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>
      </ul>

      <ul v-if="Object.keys(movie).length > 2">
        <li class="filme" v-if="Object.keys(movie).length > 2">{{Object.values(movie)[2][0]}}</li>
          <ul v-if="Object.keys(movie).length > 2 " class="indicativa">
            <li v-if=" Object.values(movie)[2][1] !== '0 '">{{Object.values(movie)[2][1]}}</li>
            <li v-else class="L">{{ 'L' }}</li>
          </ul>

          <ul class="sessao">
            <li v-if="Object.keys(movie).length > 2 && Object.values(movie)[2][2] == 'NO'" class="tipo">{{'2D'}}</li>
            <li v-else class="tipo">{{ Object.values(movie)[2][2] }}</li>
          </ul>
      
          <ul class="horarioBox" v-if="Object.keys(movie).length > 2 && (Object.values(movie)[2][3] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 2">{{Object.values(movie)[2][3]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 2 && Object.values(movie)[2][4] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 2 && (Object.values(movie)[2][5] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 2">{{Object.values(movie)[2][5]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 2 && Object.values(movie)[2][6] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 2 && (Object.values(movie)[2][7] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 2">{{Object.values(movie)[2][7]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 2 && Object.values(movie)[2][8] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 2 && (Object.values(movie)[2][9] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 2">{{Object.values(movie)[2][9]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 2 && Object.values(movie)[2][10] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 2 && (Object.values(movie)[2][11] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 2">{{Object.values(movie)[2][11]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 2 && Object.values(movie)[2][12] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 2 && (Object.values(movie)[2][13] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 2">{{Object.values(movie)[2][13]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 2 && Object.values(movie)[2][14] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 2 && (Object.values(movie)[2][15] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 2">{{Object.values(movie)[2][15]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 2 && Object.values(movie)[2][16] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>
      </ul>

      <ul v-if="Object.keys(movie).length > 3">
        <li class="filme" v-if="Object.keys(movie).length > 3">{{Object.values(movie)[3][0]}}</li>
          <ul v-if="Object.keys(movie).length > 3 " class="indicativa">
            <li v-if=" Object.values(movie)[3][1] !== '0 '">{{Object.values(movie)[3][1]}}</li>
            <li v-else class="L">{{ 'L' }}</li>
          </ul>

          <ul class="sessao">
            <li v-if="Object.keys(movie).length > 3 && Object.values(movie)[3][2] == 'NO'" class="tipo">{{'2D'}}</li>
            <li v-else class="tipo">{{ Object.values(movie)[3][2] }}</li>
          </ul>
      
          <ul class="horarioBox" v-if="Object.keys(movie).length > 3 && (Object.values(movie)[3][3] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 3">{{Object.values(movie)[3][3]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 3 && Object.values(movie)[3][4] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 3 && (Object.values(movie)[3][5] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 3">{{Object.values(movie)[3][5]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 3 && Object.values(movie)[3][6] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 3 && (Object.values(movie)[3][7] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 3">{{Object.values(movie)[3][7]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 3 && Object.values(movie)[3][8] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 3 && (Object.values(movie)[3][9] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 3">{{Object.values(movie)[3][9]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 3 && Object.values(movie)[3][10] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 3 && (Object.values(movie)[3][11] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 3">{{Object.values(movie)[3][11]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 3 && Object.values(movie)[3][12] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 3 && (Object.values(movie)[3][13] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 3">{{Object.values(movie)[3][13]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 3 && Object.values(movie)[3][14] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 3 && (Object.values(movie)[3][15] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 3">{{Object.values(movie)[3][15]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 3 && Object.values(movie)[3][16] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>
      </ul>

      <ul v-if="Object.keys(movie).length > 4">
        <li class="filme" v-if="Object.keys(movie).length > 4">{{Object.values(movie)[4][0]}}</li>
          <ul v-if="Object.keys(movie).length > 4 " class="indicativa">
            <li v-if=" Object.values(movie)[4][1] !== '0 '">{{Object.values(movie)[4][1]}}</li>
            <li v-else class="L">{{ 'L' }}</li>
          </ul>

          <ul class="sessao">
            <li v-if="Object.keys(movie).length > 4 && Object.values(movie)[4][2] == 'NO'" class="tipo">{{'2D'}}</li>
            <li v-else class="tipo">{{ Object.values(movie)[4][2] }}</li>
          </ul>
      
          <ul class="horarioBox" v-if="Object.keys(movie).length > 4 && (Object.values(movie)[4][3] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 4">{{Object.values(movie)[4][3]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 4 && Object.values(movie)[4][4] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>
          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 4 && (Object.values(movie)[4][5] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 4">{{Object.values(movie)[4][5]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 4 && Object.values(movie)[4][6] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 4 && (Object.values(movie)[4][7] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 4">{{Object.values(movie)[4][7]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 4 && Object.values(movie)[4][8] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 4 && (Object.values(movie)[4][9] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 4">{{Object.values(movie)[4][9]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 4 && Object.values(movie)[4][10] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 4 && (Object.values(movie)[4][11] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 4">{{Object.values(movie)[4][11]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 4 && Object.values(movie)[4][12] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 4 && (Object.values(movie)[4][13] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 4">{{Object.values(movie)[4][13]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 4 && Object.values(movie)[4][14] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 4 && (Object.values(movie)[4][15] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 4">{{Object.values(movie)[4][15]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 4 && Object.values(movie)[4][16] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>
      </ul>

      <ul v-if="Object.keys(movie).length > 5">
        <li class="filme" v-if="Object.keys(movie).length > 5">{{Object.values(movie)[5][0]}}</li>
          <ul v-if="Object.keys(movie).length > 5 " class="indicativa">
            <li v-if=" Object.values(movie)[5][1] !== '0 '">{{Object.values(movie)[5][1]}}</li>
            <li v-else class="L">{{ 'L' }}</li>
          </ul>

          <ul class="sessao">
            <li v-if="Object.keys(movie).length > 5 && Object.values(movie)[5][2] == 'NO'" class="tipo">{{'2D'}}</li>
            <li v-else class="tipo">{{ Object.values(movie)[5][2] }}</li>
          </ul>
      
          <ul class="horarioBox" v-if="Object.keys(movie).length > 5 && (Object.values(movie)[5][3] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 5">{{Object.values(movie)[5][3]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 5 && Object.values(movie)[5][4] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 5 && (Object.values(movie)[5][5] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 5">{{Object.values(movie)[5][5]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 5 && Object.values(movie)[5][6] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 5 && (Object.values(movie)[5][7] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 5">{{Object.values(movie)[5][7]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 5 && Object.values(movie)[5][8] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 5 && (Object.values(movie)[5][9] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 5">{{Object.values(movie)[5][9]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 5 && Object.values(movie)[5][10] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 5 && (Object.values(movie)[5][11] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 5">{{Object.values(movie)[5][11]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 5 && Object.values(movie)[5][12] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 5 && (Object.values(movie)[5][13] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 5">{{Object.values(movie)[5][13]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 5 && Object.values(movie)[5][14] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 5 && (Object.values(movie)[5][15] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 5">{{Object.values(movie)[5][15]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 5 && Object.values(movie)[5][16] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>
      </ul>

      <ul v-if="Object.keys(movie).length > 6">
        <li class="filme" v-if="Object.keys(movie).length > 6">{{Object.values(movie)[6][0]}}</li>
          <ul v-if="Object.keys(movie).length > 6 " class="indicativa">
            <li v-if=" Object.values(movie)[6][1] !== '0 '">{{Object.values(movie)[6][1]}}</li>
            <li v-else class="L">{{ 'L' }}</li>
          </ul>

          <ul class="sessao">
            <li v-if="Object.keys(movie).length > 6 && Object.values(movie)[6][2] == 'NO'" class="tipo">{{'2D'}}</li>
            <li v-else class="tipo">{{ Object.values(movie)[6][2] }}</li>
          </ul>
      
          <ul class="horarioBox" v-if="Object.keys(movie).length > 6 && (Object.values(movie)[6][3] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 6">{{Object.values(movie)[6][3]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 6 && Object.values(movie)[6][4] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 6 && (Object.values(movie)[6][5] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 6">{{Object.values(movie)[6][5]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 6 && Object.values(movie)[6][6] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 6 && (Object.values(movie)[6][7] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 6">{{Object.values(movie)[6][7]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 6 && Object.values(movie)[6][8] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 6 && (Object.values(movie)[6][9] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 6">{{Object.values(movie)[6][9]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 6 && Object.values(movie)[6][10] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 6 && (Object.values(movie)[6][11] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 6">{{Object.values(movie)[6][11]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 6 && Object.values(movie)[6][12] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 6 && (Object.values(movie)[6][13] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 6">{{Object.values(movie)[6][13]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 6 && Object.values(movie)[6][14] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 6 && (Object.values(movie)[6][15] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 6">{{Object.values(movie)[6][15]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 6 && Object.values(movie)[6][16] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>
      </ul>

      <ul v-if="Object.keys(movie).length > 7">
        <li class="filme" v-if="Object.keys(movie).length > 7">{{Object.values(movie)[7][0]}}</li>
          <ul v-if="Object.keys(movie).length > 7 " class="indicativa">
            <li v-if=" Object.values(movie)[7][1] !== '0 '">{{Object.values(movie)[7][1]}}</li>
            <li v-else class="L">{{ 'L' }}</li>
          </ul>

          <ul class="sessao">
            <li v-if="Object.keys(movie).length > 7 && Object.values(movie)[7][2] == 'NO'" class="tipo">{{'2D'}}</li>
            <li v-else class="tipo">{{ Object.values(movie)[7][2] }}</li>
          </ul>
      
          <ul class="horarioBox" v-if="Object.keys(movie).length > 7 && (Object.values(movie)[7][3] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 7">{{Object.values(movie)[7][3]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 7 && Object.values(movie)[7][4] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 7 && (Object.values(movie)[7][5] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 7">{{Object.values(movie)[7][5]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 7 && Object.values(movie)[7][6] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 7 && (Object.values(movie)[7][7] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 7">{{Object.values(movie)[7][7]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 7 && Object.values(movie)[7][8] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 7 && (Object.values(movie)[7][9] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 7">{{Object.values(movie)[7][9]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 7 && Object.values(movie)[7][10] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 7 && (Object.values(movie)[7][11] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 7">{{Object.values(movie)[7][11]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 7 && Object.values(movie)[7][12] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 7 && (Object.values(movie)[7][13] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 7">{{Object.values(movie)[7][13]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 7 && Object.values(movie)[7][14] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 7 && (Object.values(movie)[7][15] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 7">{{Object.values(movie)[7][15]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 7 && Object.values(movie)[7][16] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>
      </ul>

      <ul v-if="Object.keys(movie).length > 8">
        <li class="filme" v-if="Object.keys(movie).length > 8">{{Object.values(movie)[8][0]}}</li>
          <ul v-if="Object.keys(movie).length > 8 " class="indicativa">
            <li v-if=" Object.values(movie)[8][1] !== '0 '">{{Object.values(movie)[8][1]}}</li>
            <li v-else class="L">{{ 'L' }}</li>
          </ul>

          <ul class="sessao">
            <li v-if="Object.keys(movie).length > 8 && Object.values(movie)[8][2] == 'NO'" class="tipo">{{'2D'}}</li>
            <li v-else class="tipo">{{ Object.values(movie)[8][2] }}</li>
          </ul>
      
          <ul class="horarioBox" v-if="Object.keys(movie).length > 8 && (Object.values(movie)[8][3] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 8">{{Object.values(movie)[8][3]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 8 && Object.values(movie)[8][4] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 8 && (Object.values(movie)[8][5] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 8">{{Object.values(movie)[8][5]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 8 && Object.values(movie)[8][6] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 8 && (Object.values(movie)[8][7] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 8">{{Object.values(movie)[8][7]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 8 && Object.values(movie)[8][8] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 8 && (Object.values(movie)[8][9] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 8">{{Object.values(movie)[8][9]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 8 && Object.values(movie)[8][10] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 8 && (Object.values(movie)[8][11] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 8">{{Object.values(movie)[8][11]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 8 && Object.values(movie)[8][12] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 8 && (Object.values(movie)[8][13] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 8">{{Object.values(movie)[8][13]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 8 && Object.values(movie)[8][14] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 8 && (Object.values(movie)[8][15] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 8">{{Object.values(movie)[8][15]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 8 && Object.values(movie)[8][16] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>
      </ul>

      <ul v-if="Object.keys(movie).length > 9">
        <li class="filme" v-if="Object.keys(movie).length > 9">{{Object.values(movie)[9][0]}}</li>
          <ul v-if="Object.keys(movie).length > 9 " class="indicativa">
            <li v-if=" Object.values(movie)[9][1] !== '0 '">{{Object.values(movie)[9][1]}}</li>
            <li v-else class="L">{{ 'L' }}</li>
          </ul>

          <ul class="sessao">
            <li v-if="Object.keys(movie).length > 9 && Object.values(movie)[9][2] == 'NO'" class="tipo">{{'2D'}}</li>
            <li v-else class="tipo">{{ Object.values(movie)[9][2] }}</li>
          </ul>
      
          <ul class="horarioBox" v-if="Object.keys(movie).length > 9 && (Object.values(movie)[9][3] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 9">{{Object.values(movie)[9][3]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 9 && Object.values(movie)[9][4] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 9 && (Object.values(movie)[9][5] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 9">{{Object.values(movie)[9][5]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 9 && Object.values(movie)[9][6] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 9 && (Object.values(movie)[9][7] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 9">{{Object.values(movie)[9][7]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 9 && Object.values(movie)[9][8] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 9 && (Object.values(movie)[9][9] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 9">{{Object.values(movie)[9][9]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 9 && Object.values(movie)[9][10] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 9 && (Object.values(movie)[9][11] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 9">{{Object.values(movie)[9][11]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 9 && Object.values(movie)[9][12] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 9 && (Object.values(movie)[9][13] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 9">{{Object.values(movie)[9][13]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 9 && Object.values(movie)[9][14] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>

          <ul class="horarioBox" v-if="Object.keys(movie).length > 9 && (Object.values(movie)[9][15] !== undefined ? true : false)">
            <li class="horario" v-if="Object.keys(movie).length > 9">{{Object.values(movie)[9][15]}}</li>
            <li class="sub" v-if="Object.keys(movie).length > 9 && Object.values(movie)[9][16] == 'D'">{{'DUB'}}</li>
            <li class="sub" v-else> {{ 'LEG' }}</li>          </ul>
          <ul v-else class="horarioBox2"> {{  }}</ul>
      </ul>

      
      
    </ul>    
  </div>

    

</template>

<script>


export default {
  name: 'FileReader',
  data() {
    return {
      lines: [],
      letters: [],
      filmes: [],
      horarios: [],
      juncao: [],
      movie: { },
      idadeA: [],
      sessaoA: [],
      sub: []
    }
  },
  created() {
  this.readFile()
  },
  methods: {
      async readFile() {
      const file = await fetch("./as1.txt")
      const text = await file.text()
      const lines = text.split('\n')
      this.lines = lines

      const newArray = [];

      this.lines.forEach((element) => {
        const letters = this.splitLetters(element);
        letters.forEach((letter) => {
          newArray.push(letter);
        })
      })

      this.letters = newArray

      this.concatenateFilme(this.letters, 15, 75, 81, 92, 10, 15, 75, 77, 91, 93, 80, 81)
      this.concatenateFilme(this.letters, 287, 347, 353, 364, 282, 287, 347, 349, 363, 365, 352, 353)
      this.concatenateFilme(this.letters, 559, 619, 625, 636, 554, 559, 619, 621, 635, 637, 624, 625)
      this.concatenateFilme(this.letters, 831, 891, 897, 908, 826, 831, 891, 893, 907, 909, 896, 897)
      this.concatenateFilme(this.letters, 1103, 1163, 1169, 1180, 1098, 1103, 1163, 1165, 1179, 1181, 1168, 1169)
      this.concatenateFilme(this.letters, 1375, 1435, 1441, 1452, 1370, 1375, 1435, 1437, 1451, 1453, 1440, 1441)
      this.concatenateFilme(this.letters, 1647, 1707, 1713, 1724, 1642, 1647, 1707, 1709, 1723, 1725, 1712, 1713)
      this.concatenateFilme(this.letters, 1919, 1979, 1985, 1996, 1914, 1919, 1979, 1981, 1995, 1997, 1984, 1985)
      this.concatenateFilme(this.letters, 2191, 2251, 2257, 2268, 2186, 2191, 2251, 2253, 2267, 2269, 2256, 2257)
      this.concatenateFilme(this.letters, 2463, 2523, 2529, 2540, 2458, 2463, 2523, 2525, 2539, 2541, 2528, 2529)
      this.concatenateFilme(this.letters, 2735, 2795, 2801, 2812, 2730, 2735, 2795, 2797, 2811, 2813, 2800, 2801)
      this.concatenateFilme(this.letters, 3007, 3067, 3073, 3084, 3002, 3007, 3067, 3069, 3083, 3085, 3072, 3073)
      this.concatenateFilme(this.letters, 3279, 3339, 3345, 3356, 3274, 3279, 3339, 3341, 3355, 3357, 3344, 3345)
      this.concatenateFilme(this.letters, 3551, 3611, 3617, 3628, 3546, 3551, 3611, 3613, 3627, 3629, 3616, 3617)
      this.concatenateFilme(this.letters, 3823, 3883, 3889, 3900, 3818, 3823, 3883, 3885, 3899, 3901, 3888, 3889)
      this.concatenateFilme(this.letters, 4095, 4155, 4161, 4172, 4090, 4095, 4155, 4157, 4176, 4173, 4160, 4161)
      this.concatenateFilme(this.letters, 4367, 4427, 4433, 4444, 4362, 4367, 4427, 4429, 4443, 4445, 4432, 4433)
      this.concatenateFilme(this.letters, 4639, 4699, 4705, 4716, 4634, 4639, 4699, 4701, 4715, 4717, 4704, 4705)

      return this.letters
    },
    splitLetters(line) {
      return line.split('')
    },

    concatenateFilme(letters, comecoFilme, finalFilme, comecoTipo, finalTipo, comecoHorario, finalHorario, idadeComeco, idadeFinal, sessaoComeco, sessaoFinal, subComeco, subFinal) {
     var horario = ''; 
     var filme = '';
     var tipo = '';
     var idade = '';
     var sessao = '';
     var sub = ''

      while (comecoFilme < finalFilme && comecoFilme < letters.length) {
        filme = filme + letters[comecoFilme];
        comecoFilme = comecoFilme + 1
      }

      while (comecoTipo < finalTipo && comecoTipo < letters.length) {
        tipo = tipo + letters[comecoTipo];
        comecoTipo++;
      }

      while (comecoHorario < finalHorario && comecoHorario < letters.length) {
        horario = horario + letters[comecoHorario];
        comecoHorario++;
      }

      while (idadeComeco < idadeFinal && idadeComeco < letters.length) {
        idade = idade + letters[idadeComeco];
        idadeComeco++;
      }

      while (sessaoComeco < sessaoFinal && sessaoComeco < letters.length) {
        sessao = sessao + letters[sessaoComeco];
        sessaoComeco++;
      }

      while (subComeco < subFinal && subComeco < letters.length) {
        sub = sub + letters[subComeco];
        subComeco++;
      }

      this.sessaoA.push(sessao)
      this.idadeA.push(idade)
      this.juncao.push(tipo)
      console.log(this.juncao)
      this.horarios.push(horario)
      console.log(horario)
      this.filmes.push(filme)
      this.sub.push(sub)
      
      this.armazObj(this.filmes)

    },

    slice(string){
      var corte = string.slice(0, 59);
      return corte
    },

    armazObj(filmes){
      const index = filmes.length - 1;
      const key = this.juncao[index];
  
      if (Object.prototype.hasOwnProperty.call(this.movie, key)) {
      this.movie[key].push(this.horarios[index]);
      this.movie[key].push(this.sub[index]);
      } else {
      this.movie[key] = [filmes[index]];
      this.movie[key].push(this.idadeA[index]);
      this.movie[key].push(this.sessaoA[index]);
      this.movie[key].push(this.horarios[index]);
      this.movie[key].push(this.sub[index]);
  }
    }
  },
  mounted() {
  console.log(this.movie);
}
}


</script>

<style scoped>
  li{
    list-style: none;
    display: inline-block;
  }

  .filme{
    font-family: the Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    width: 600px;
    background-color: #252424;
    color: azure;
    padding: 27px;
    font-weight: bold;
    font-size: large;
    display: inline-block;
    border-bottom: 1px solid rgb(117, 117, 117);
  }

  .horarios{
    display: inline-block;
  }

  .horarioBox{
    display: inline-block;
    background-color: #b8b8b8;
    border-right: 1px solid rgb(151, 150, 150);
    border-bottom: 1px solid rgb(151, 150, 150);
    width: 60px;
    height: 75px;
    position: relative;
  }

  .horario{
    color: black;
    font-size: x-large;
    font-weight: bold;
    margin-left: -20px;
    position: relative;
    top: 15px;
  }

  .indicativa{
    font-weight: bold;
    color: #FFF;
    font-size: large;
    display: inline-block;
    background-color: #363438;
    padding: 27px;
    border-bottom: 1px solid rgb(117, 117, 117);
  }

  .sessao{
    display: inline-block;
    background-color: #646460;
    padding: 27px;
    border-right: 1px solid rgb(117, 117, 117);
    border-bottom: 1px solid rgb(117, 117, 117);
  }
  
  .tipo{
    color: black;
    font-size: large;
    font-weight: bold;
    width: 27px;
  }

  .L{
    width: 18px;
  }

  .horarioBox2{
    display: inline-block;
    width: 60px;
    background-color: #b8b8b8;
    border-right: 1px solid rgb(151, 150, 150);
    border-bottom: 1px solid rgb(151, 150, 150);
    height: 75px;
    margin-bottom: -33px;
  }

  .sub{
    color: black;
    font-size: medium;
    font-weight: bold;
    border: 1px solid black;
    position: relative;
    left: -18px;
    bottom: -18px;
    padding-right: 10px;
    padding-left: 10px;
    border-radius: 10px;
    border-top-width: 2px;
    border-bottom-width: 0px;
    background-color: #acacac;
  }

</style>