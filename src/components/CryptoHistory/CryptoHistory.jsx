import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { format } from 'date-fns';

export const CryptoHistory = ({ items }) => {
  return (
    <div>
      <BaseTable>
        <THead>
          <tr>
            <Th>№</Th>
            <Th>PRICE</Th>
            <Th>AMOUNT</Th>
            <Th>DATE</Th>
          </tr>
        </THead>

        <tbody>
          {items.map((item, index) => {
            return (
              <Tr key={item.id}>
                <Td>{index + 1}</Td>
                <Td>{item.price}</Td>
                <Td>{item.amount}</Td>
                <Td>{format(new Date(item.date), 'Pp')}</Td>
              </Tr>
            );
          })}
        </tbody>
      </BaseTable>
    </div>
  );
};
