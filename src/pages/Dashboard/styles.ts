import styled, { css } from 'styled-components';

interface CardProps {
  total?: boolean;
}

const containerStyle = css`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const CardWrapper = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #5636d3 50%, transparent 50%);
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  padding: 40px 20px;
  ${containerStyle};
`;

export const Card = styled.div`
  background: ${({ total }: CardProps): string => (total ? '#FF872C' : '#fff')};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#363F5F')};

  transition: 0.2s transform;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;
  padding: 40px 20px;
  ${containerStyle};

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    tbody {
      tr {
        background: #ffffff;
        transition: 0.2s background-color;
        &:hover {
          background: #f7f7f7;
        }
      }
    }

    td {
      padding: 20px 32px;
      border: 0;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;

      &.title {
        color: #363f5f;
      }

      &.income {
        color: #12a454;
      }

      &.outcome {
        color: #e83f5b;
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
