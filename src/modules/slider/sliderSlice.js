import { createSlice } from "@reduxjs/toolkit";
import logo from "../../assets/img/log.png"

const sliderSlice = createSlice({
    name: "source",
    initialState: {
        imgSource: [
            {
              min: "https://www.apple.com/v/home/aq/images/tv-plus-gallery/fnb__brvfy48gzsz6_small_2x.jpg",
              middleMin: "https://www.apple.com/v/home/aq/images/tv-plus-gallery/fnb__brvfy48gzsz6_medium_2x.jpg",
              middleMax: "https://www.apple.com/v/home/aq/images/tv-plus-gallery/fnb__brvfy48gzsz6_large_2x.jpg",
              max: "https://www.apple.com/v/home/aq/images/tv-plus-gallery/fnb__brvfy48gzsz6_xlarge.jpg",
            },
            {
              min: "https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/1f/ee/83/1fee8392-4edf-4bff-703f-dcebecca0971/618c4cdb-f9d3-4f89-9573-18d8da043128.png/548x1186.jpg",
              middleMin: "https://is2-ssl.mzstatic.com/image/thumb/_dJgnWG8W30_qMRZYCEx-Q/1378x774.jpg",
              middleMax: "https://is2-ssl.mzstatic.com/image/thumb/_dJgnWG8W30_qMRZYCEx-Q/1960x1102.jpg",
              max: "https://is2-ssl.mzstatic.com/image/thumb/_dJgnWG8W30_qMRZYCEx-Q/2500x1406.jpg",
              title: "https://is4-ssl.mzstatic.com/image/thumb/lnaTdeGrii-TPN83-S-Luw/1096x580.png",
              logo
              
            },
            {
              min: "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/50/1e/58/501e5882-3137-209e-f5b1-c5c5e2250a34/cc8dc554-38ad-4427-bc9a-1152b760ed2f.png/548x1186.jpg",
              middleMin: "https://is5-ssl.mzstatic.com/image/thumb/ewq0-5ZSairVdRtcg43s0w/1378x774.jpg",
              middleMax: "https://is5-ssl.mzstatic.com/image/thumb/ewq0-5ZSairVdRtcg43s0w/1960x1102.jpg",
              max: "https://is5-ssl.mzstatic.com/image/thumb/ewq0-5ZSairVdRtcg43s0w/1250x703.jpg",
              title: "https://is1-ssl.mzstatic.com/image/thumb/whMhCWsDJ2tKA9wkL_AVKw/1096x244.png",
              logo,
            },
            {
              min: "https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/c5/1b/f5/c51bf51e-6a34-1c18-64af-67ca45db3560/550c8e18-a329-4518-8fa7-0a00ded7f629.png/548x1186.jpg",
              middleMin: "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/1378x774.jpg",
              middleMax: "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/1960x1102.jpg",
              max: "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/2500x1406.jpg",
              title: "https://is1-ssl.mzstatic.com/image/thumb/HLtk3Wx1CmcQN3Pr8wX-2Q/1096x398.png",
              logo,
            },
            {
              min: "https://is3-ssl.mzstatic.com/image/thumb/Features126/v4/ef/41/dc/ef41dc66-880f-fa09-3f3c-9d16f4d8142f/Q1NULVRWQS1XVy1UU1MyX0hlcm8ucG5n.png/548x1186.jpg",
              middleMin: "https://is5-ssl.mzstatic.com/image/thumb/P-1f-E_Qew_9syoQd34Wlw/1378x774.jpg",
              middleMax: "https://is5-ssl.mzstatic.com/image/thumb/P-1f-E_Qew_9syoQd34Wlw/1960x1102.jpg",
              max: "https://is5-ssl.mzstatic.com/image/thumb/P-1f-E_Qew_9syoQd34Wlw/1250x703.jpg",
              title: "https://is3-ssl.mzstatic.com/image/thumb/FyJU4rBvnDPk7XV7PAjgsg/1096x182.png",
              logo,
            },
            {
              min: "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/d3/9e/3e/d39e3e59-febb-d790-1d9a-db35c539bb47/VEVEMl9DU1QtVFZBLVdXLnBuZw.png/548x1186.jpg",
              middleMin: "https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/1378x774.jpg",
              middleMax: "https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/1960x1102.jpg",
              max: "https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/2500x1406.jpg",
              title: "https://is5-ssl.mzstatic.com/image/thumb/W_KYWlRrjbCifAA0Gn8mTg/1096x158.png",
              logo,
            },
            {
              min: "https://is3-ssl.mzstatic.com/image/thumb/Features126/v4/2b/74/49/2b7449f2-f983-3b2c-6a6b-8ed2a26d12e7/Q1NULVRWQS1XVy1TRVYxX01hcmtzLUhlYWQucG5n.png/548x1186.jpg",
              middleMin: "https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/1378x774.jpg",
              middleMax: "https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/1960x1102.jpg",
              max: "https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/2500x1406.jpg",
              title: "https://is2-ssl.mzstatic.com/image/thumb/scWVLKF-KZ5amwgQrFO2jw/1096x180.png",
              logo,
            },
            {
              min: "https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/90/1b/56/901b565f-405b-0107-eab5-49b584e5b4a4/17a74b4f-e275-4483-9db1-8518decfadc5.png/548x1186.jpg",
              middleMin: "https://is1-ssl.mzstatic.com/image/thumb/IyvoDdhWEjtSADaSryepIw/1378x774.jpg",
              middleMax: "https://is1-ssl.mzstatic.com/image/thumb/IyvoDdhWEjtSADaSryepIw/1960x1102.jpg",
              max: "https://is1-ssl.mzstatic.com/image/thumb/IyvoDdhWEjtSADaSryepIw/2500x1406.jpg",
              title: "https://is2-ssl.mzstatic.com/image/thumb/pyv36BpILvR6bUl2k7nWUA/1096x456.png",
              logo,
            },
            {
              min: "https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/79/d2/f3/79d2f33d-0c47-4eff-a727-3bf3c2958b46/af13f83a-2b5d-4573-8ea0-7328dcce3214.png/548x1186.jpg",
              middleMin: "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/1378x774.jpg",
              middleMax: "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/1960x1102.jpg",
              max: "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/2500x1406.jpg",
              title: "https://is4-ssl.mzstatic.com/image/thumb/Z40zNrxqwOkG-CGQ_uyDrw/1096x164.png",
              logo,
            },
            {
              min: "https://is3-ssl.mzstatic.com/image/thumb/Features115/v4/cc/63/f6/cc63f6f6-314d-346e-a671-1df1535d07b3/Q1NULVRWQS1XVy1UTVMyX0hlcm9fQ29udHJvbF9Sb29tLnBuZw.png/548x1186.jpg",
              middleMin: "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/1378x774.jpg",
              middleMax: "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/1960x1102.jpg",
              max: "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/2500x1406.jpg",
              title: "https://is1-ssl.mzstatic.com/image/thumb/gbLRG_FijUMfERIsYUKonQ/1096x330.png",
              logo,
            },
            {
              min: "https://is1-ssl.mzstatic.com/image/thumb/Features122/v4/2d/7d/0b/2d7d0b24-4242-9611-5f98-746323a43edb/b90bed38-0f97-414b-b36a-0c790c326e57.png/548x1186.jpg",
              middleMin: "https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/1378x774.jpg",
              middleMax: "https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/1960x1102.jpg",
              max: "https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/2500x1406.jpg",
              title: "https://is3-ssl.mzstatic.com/image/thumb/CfqbL8vb8oshteso54LnaA/1096x336.png",
              logo,
            },
        ],
        textSource: [
          {
            genre: "Sports",
            aboutFilm: "Live MLB games, every Friday"
          },
          {
            genre: "Animation",
            aboutFilm :"Sometimes all you need is for everything to go wrong"
          },
          {
            genre: "Drama",
            aboutFilm :"Based on actual events from hurricane Katrina"
          },
          {
            genre: "Drama",
            aboutFilm :"One men's freedom hides in another man's darknees"
          },
          {
            genre: "Kid's & Family",
            aboutFilm :"Happiness is back"
          },
          {
            genre: "Comedy",
            aboutFilm :"20 Emmy Nominations Including Best Comedy"
          },
          {
            genre: "Thriller",
            aboutFilm :"14 Emmy Nominations Including Best Drama"
          },
          {
            genre: "Comedy",
            aboutFilm :"She's about change her fortune"
          },
          {
            genre: "Documentary",
            aboutFilm :"Unknown. Unexplained. Unbelievable. Until now."
          },
          {
            genre: "Drama",
            aboutFilm :"3 Emmy Nominations Including Best Actress"
          },
          {
            genre: "Drama",
            aboutFilm :"The race continues."
          },
        ],
        status: "idle",
        error: null,
    },
    reducers: {
        
    },

    extraReducers: {
        
    }
})

export default sliderSlice.reducer;