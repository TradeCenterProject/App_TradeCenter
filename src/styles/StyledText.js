import React, {useCallback, useEffect, useState} from 'react';
import {colors} from './colors';
import styled, {css} from 'styled-components';
import n from '../helper/normailze';
import {StyleSheet, View, Text} from 'react-native';

export const St = props => (
  <Stt {...props} allowFontScaling={false}>
    {props.children}
  </Stt>
);

const Stt = styled.Text`
  color: black;

  ${props => props.h1 && h1}
  ${props => props.h2 && h2}
  ${props => props.h3 && h3}
  ${props => props.h4 && h4}
  ${props => props.s1 && s1}
  ${props => props.s2 && s2}
  ${props => props.s3 && s3}
  ${props => props.s4 && s4}
  ${props => props.s5 && s5}
  ${props => props.s6 && s6}
  ${props => props.b1 && b1}
  ${props => props.b2 && b2}
  ${props => props.b3 && b3}
  ${props => props.b4 && b4}
  ${props => props.b5 && b5}
  ${props => props.b6 && b6}
  ${props => props.b7 && b7}
  ${props => props.c1 && c1}
  ${props => props.c2 && c2}
  ${props => props.c3 && c3}
  ${props => props.c4 && c4}
  ${props => props.c5 && c5}
  ${props => props.c6 && c6}
  ${props => props.c7 && c7}
  ${props => props.c8 && c8}
  ${props => props.c9 && c9}
  ${props => props.c10 && c10}
  ${props => props.c11 && c11}
  ${props => props.d1 && d1}
  ${props => props.d2 && d2}
  ${props => props.d3 && d3}
  ${props => props.d4 && d4}
  ${props => props.d5 && d5}
  ${props => props.d6 && d6}
  ${props => props.d7 && d7}
  ${props => props.d8 && d8}
  ${props => props.d9 && d9}
  ${props => props.d10 && d10}
  ${props => props.d11 && d11}
  ${props => props.d12 && d12}
  ${props => props.e1 && e1}
  ${props => props.e2 && e2}
  ${props => props.e3 && e3}
  ${props => props.e4 && e4}
  ${props => props.e5 && e5}
  ${props => props.e6 && e6}
  ${props => props.e7 && e7}
  ${props => props.e8 && e8}
  ${props => props.e9 && e9}
  ${props => props.e10 && e10}
  ${props => props.e11 && e11}
  ${props => props.e12 && e12}
  ${props => props.e13 && e13}

  ${props => props.primary && primary}
  ${props => props.primary005 && primary005}
  ${props => props.secondary && secondary}
  ${props => props.black && black}
  ${props => props.g0 && g0}
  ${props => props.g1 && g1}
  ${props => props.g2 && g2}
  ${props => props.g3 && g3}
  ${props => props.g4 && g4}
  ${props => props.g5 && g5}
  ${props => props.g6 && g6}
  ${props => props.g7 && g7}
  ${props => props.g8 && g8}
  ${props => props.g9 && g9}
  ${props => props.g10 && g10}
  ${props => props.g11 && g11}
  ${props => props.g9005 && g9005}
  ${props => props.white && white}
  ${props => props.red && red}
  ${props => props.mint && mint}
  ${props => props.T2407 && T2407}

  ${props => props.color && `color: ${props.color};`}

  /*마진 속성*/
  ${props => props.m && m}
  ${props => props.mt && mt}
  ${props => props.mb && mb}
  ${props => props.ml && ml}
  ${props => props.mr && mr}
  ${props => props.mx && mx}
  ${props => props.my && my}
  /*패딩 속성*/
  ${props => props.p && p}
  ${props => props.pt && pt}
  ${props => props.pb && pb}
  ${props => props.pl && pl}
  ${props => props.pr && pr}
  ${props => props.px && px}
  ${props => props.py && py}

  ${props => props.center && center}
  ${props => props.left && left}
  ${props => props.right && right}

  ${props => props.bold && bold}
  ${props => props.underLine && underLine}
`;
const h1 = css`
  font-size: ${n(36)}px;
  line-height: ${n(50)}px;
`;
const h2 = css`
  font-size: ${n(27)}px;
  line-height: ${n(39)}px;
`;
const h3 = css`
  font-size: ${n(20)}px;
  line-height: ${n(34)}px;
`;
const h4 = css`
  font-size: ${n(20)}px;
  line-height: ${n(20)}px;
`;
const s1 = css`
  font-weight: bold;
  font-size: ${n(18)}px;
  line-height: ${n(25)}px;
`;
const s2 = css`
  font-weight: bold;
  font-size: ${n(16)}px;
  line-height: ${n(22)}px;
`;
const s3 = css`
  font-weight: bold;
  font-size: ${n(14)}px;
  line-height: ${n(20)}px;
`;
const s4 = css`
  font-weight: bold;
  font-size: ${n(12)}px;
  line-height: ${n(17)}px;
`;

const s5 = css`
  font-weight: bold;
  font-size: ${n(11)}px;
  line-height: ${n(15)}px;
`;
const s6 = css`
  font-weight: 400;
  font-size: ${n(18)}px;
  line-height: ${n(21.48)}px;
`;
const b1 = css`
  font-weight: 400;
  font-size: ${n(16)}px;
  line-height: ${n(22.4)}px;
`;
const b2 = css`
  font-weight: 400;
  font-size: ${n(14)}px;
  line-height: ${n(20)}px;
`;
const b3 = css`
  font-weight: 400;
  font-size: ${n(12)}px;
  line-height: ${n(17)}px;
`;
const b4 = css`
  font-weight: 400;
  font-size: ${n(14)}px;
  line-height: ${n(22)}px;
`;
const b5 = css`
  font-weight: 400;
  font-size: ${n(10)}px;
  line-height: ${n(11.93)}px;
`;
const b6 = css`
  font-weight: 400;
  font-size: ${n(6.8)}px;
  line-height: ${n(12.93)}px;
`;
const b7 = css`
  font-weight: 400;
  font-size: ${n(13)}px;
  line-height: ${n(16.8)}px;
`;

const c1 = css`
  font-weight: 500;
  font-size: ${n(13)}px;
  line-height: ${n(18)}px;
`;
const c2 = css`
  font-weight: 500;
  font-size: ${n(12)}px;
  line-height: ${n(17)}px;
`;
const c3 = css`
  font-weight: 500;
  font-size: ${n(10)}px;
  line-height: ${n(14)}px;
`;

const c4 = css`
  font-weight: 400;
  font-size: ${n(7)}px;
  line-height: ${n(8.4)}px;
`;
const c5 = css`
  font-weight: 500;
  font-size: ${n(16)}px;
  line-height: ${n(22.4)}px;
`;
const c6 = css`
  font-weight: 400;
  font-size: ${n(12)}px;
  line-height: ${n(20)}px;
`;
const c7 = css`
  font-weight: 500;
  font-size: ${n(12)}px;
  line-height: ${n(20)}px;
`;
const c8 = css`
  font-weight: 500;
  font-size: ${n(14)}px;
  line-height: ${n(20)}px;
`;
const c9 = css`
  font-weight: 400;
  font-size: ${n(8)}px;
  line-height: ${n(10)}px;
`;
const c10 = css`
  font-weight: 400;
  font-size: ${n(16)}px;
  line-height: ${n(19)}px;
`;
const c11 = css`
  font-weight: 400;
  font-size: ${n(12)}px;
  line-height: ${n(18.32)}px;
`;
const d1 = css`
  font-weight: 700;
  font-size: ${n(35)}px;
  line-height: ${n(42)}px;
`;
const d2 = css`
  font-weight: 800;
  font-size: ${n(16)}px;
  line-height: ${n(19)}px;
`;

const d3 = css`
  font-weight: 700;
  font-size: ${n(18)}px;
  line-height: ${n(20)}px;
`;

const d4 = css`
  font-weight: 700;
  font-size: ${n(14)}px;
  line-height: ${n(20)}px;
`;
const d5 = css`
  font-weight: 700;
  font-size: ${n(16)}px;
  line-height: ${n(22.4)}px;
`;

const d6 = css`
  font-weight: 700;
  font-size: ${n(25)}px;
  line-height: ${n(29.83)}px;
`;

const d7 = css`
  font-weight: 700;
  font-size: ${n(30)}px;
  line-height: ${n(36)}px;
`;

const d8 = css`
  font-weight: 700;
  font-size: ${n(20)}px;
  line-height: ${n(23.87)}px;
`;

const d9 = css`
  font-weight: 700;
  font-size: ${n(7)}px;
  line-height: ${n(8.35)}px;
`;

const d10 = css`
  font-weight: 700;
  font-size: ${n(12)}px;
  line-height: ${n(14.35)}px;
`;
const d11 = css`
  font-weight: 700;
  font-size: ${n(15)}px;
  line-height: ${n(17.35)}px;
`;
const d12 = css`
  font-weight: 800;
  font-size: ${n(10)}px;
  line-height: ${n(14)}px;
`;

const e1 = css`
  font-weight: 700;
  font-size: ${n(14)}px;
  line-height: ${n(19.6)}px;
`;
const e2 = css`
  font-weight: 700;
  font-size: ${n(18)}px;
  line-height: ${n(26)}px;
`;
const e3 = css`
  font-weight: 400;
  font-size: ${n(14)}px;
  line-height: ${n(20)}px;
`;
const e4 = css`
  font-weight: 400;
  font-size: ${n(14)}px;
  line-height: ${n(19.6)}px;
`;
const e5 = css`
  font-weight: 700;
  font-size: ${n(18)}px;
  line-height: ${n(20)}px;
`;
const e6 = css`
  font-weight: 700;
  font-size: ${n(16)}px;
  line-height: ${n(20)}px;
`;
const e7 = css`
  font-weight: 500;
  font-size: ${n(14)}px;
  line-height: ${n(19.6)}px;
`;
const e8 = css`
  font-weight: 500;
  font-size: ${n(16)}px;
  line-height: ${n(19.09)}px;
`;
const e9 = css`
  font-weight: 700;
  font-size: ${n(16)}px;
  line-height: ${n(22.4)}px;
`;
const e10 = css`
  font-weight: 700;
  font-size: ${n(24)}px;
  line-height: ${n(28.64)}px;
`;
const e11 = css`
  font-weight: 700;
  font-size: ${n(8)}px;
  line-height: ${n(20)}px;
`;
const e12 = css`
  font-weight: 700;
  font-size: ${n(13)}px;
  line-height: ${n(15)}px;
`;

const e13 = css`
  font-weight: 700;
  font-size: ${n(28)}px;
  line-height: ${n(39.2)}px;
`;

const primary = css`
  color: ${colors.primary};
`;
const primary005 = css`
  color: ${colors.primary050};
`;
const secondary = css`
  color: ${colors.secondary};
`;
const black = css`
  color: ${colors.black};
`;
const g0 = css`
  color: ${colors.g0};
`;
const g1 = css`
  color: ${colors.g1};
`;
const g2 = css`
  color: ${colors.g2};
`;
const g3 = css`
  color: ${colors.g3};
`;
const g4 = css`
  color: ${colors.g4};
`;
const g5 = css`
  color: ${colors.g5};
`;
const g6 = css`
  color: ${colors.g6};
`;
const g7 = css`
  color: ${colors.g7};
`;
const g8 = css`
  color: ${colors.g8};
`;
const g9 = css`
  color: ${colors.g9};
`;
const g10 = css`
  color: ${colors.g10};
`;
const g11 = css`
  color: ${colors.g11};
`;
const g9005 = css`
  color: ${colors.g9005};
`;
const white = css`
  color: ${colors.white};
`;
const red = css`
  color: ${colors.red};
`;
const mint = css`
  color: ${colors.mint};
`;

const T2407 = css`
  color: ${colors.T2407};
`;

const center = css`
  text-align: center;
`;
const left = css`
  text-align: left;
`;
const right = css`
  text-align: right;
`;

const bold = css`
  font-weight: bold;
`;
const underLine = css`
  text-decoration: underline;
  text-decoration-color: white;
`;

//------------------------------------------------------------------
const p = css`
  padding: ${props => n(props.p)}px !important;
`;
const pt = css`
  padding-top: ${props => n(props.pt)}px !important;
`;
const pb = css`
  padding-bottom: ${props => n(props.pb)}px !important;
`;
const pl = css`
  padding-left: ${props => n(props.pl)}px !important;
`;
const pr = css`
  padding-right: ${props => n(props.pr)}px !important;
`;
const px = css`
  padding-left: ${props => n(props.px)}px !important;
  padding-right: ${props => n(props.px)}px !important;
`;
const py = css`
  padding-top: ${props => n(props.py)}px !important;
  padding-bottom: ${props => n(props.py)}px !important;
`;
//------------------------------------------------------------------
const m = css`
  margin: ${props => n(props.m)}px !important;
`;
const mt = css`
  margin-top: ${props => n(props.mt)}px !important;
`;
const mb = css`
  margin-bottom: ${props => n(props.mb)}px !important;
`;
const ml = css`
  margin-left: ${props => n(props.ml)}px !important;
`;
const mr = css`
  margin-right: ${props => n(props.mr)}px !important;
`;
const mx = css`
  margin-left: ${props => n(props.mx)}px !important;
  margin-right: ${props => n(props.mx)}px !important;
`;
const my = css`
  margin-top: ${props => n(props.my)}px !important;
  margin-bottom: ${props => n(props.my)}px !important;
`;
//------------------------------------------------------------------
