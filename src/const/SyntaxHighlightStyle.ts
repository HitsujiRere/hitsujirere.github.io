// I referred to vs
// import { vs } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import React from 'react';

const style: { [key: string]: React.CSSProperties } = {
  hljs: {
    display: 'block',
    overflowX: 'auto',
    padding: '0.5em',
    background: 'transparent',
    color: '#202020',
  },
  'hljs-comment': {
    color: '#008000',
  },
  'hljs-quote': {
    color: '#008000',
  },
  'hljs-variable': {
    color: '#008000',
  },
  'hljs-keyword': {
    color: '#00f',
  },
  'hljs-selector-tag': {
    color: '#00f',
  },
  'hljs-built_in': {
    color: '#00f',
  },
  'hljs-name': {
    color: '#00f',
  },
  'hljs-tag': {
    color: '#00f',
  },
  'hljs-string': {
    color: '#a31515',
  },
  'hljs-title': {
    color: '#a31515',
  },
  'hljs-section': {
    color: '#a31515',
  },
  'hljs-attribute': {
    color: '#a31515',
  },
  'hljs-literal': {
    color: '#a31515',
  },
  'hljs-template-tag': {
    color: '#a31515',
  },
  'hljs-template-variable': {
    color: '#a31515',
  },
  'hljs-type': {
    color: '#a31515',
  },
  'hljs-addition': {
    color: '#a31515',
  },
  'hljs-deletion': {
    color: '#2b91af',
  },
  'hljs-selector-attr': {
    color: '#2b91af',
  },
  'hljs-selector-pseudo': {
    color: '#2b91af',
  },
  'hljs-meta': {
    color: '#2b91af',
  },
  'hljs-doctag': {
    color: '#808080',
  },
  'hljs-attr': {
    color: '#f00',
  },
  'hljs-symbol': {
    color: '#00b0e8',
  },
  'hljs-bullet': {
    color: '#00b0e8',
  },
  'hljs-link': {
    color: '#00b0e8',
  },
  'hljs-emphasis': {
    fontStyle: 'italic',
  },
  'hljs-strong': {
    fontWeight: 'bold',
  },
};

export { style };
