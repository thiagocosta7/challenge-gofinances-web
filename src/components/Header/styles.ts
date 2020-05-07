import styled from 'styled-components';

export const Container = styled.div`
  background: #5636d3;
  padding: 32px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        position: relative;
        opacity: 0.8;

        &.selected {
          opacity: 1;
          &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -10px;
            height: 2px;
            width: 100%;
            background: #ff872c;
            transition: 0.2s opacity;
          }
        }

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;
