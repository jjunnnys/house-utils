import { useEffect, useState } from 'react';
import axios from 'axios';
import { ActionType } from '@/types/ActionType';

function Home() {
  const [brokerage, setBrokerage] = useState<number | undefined>();
  useEffect(() => {
    (async () => {
      const params: { actionType: ActionType } = {
        actionType: 'RENT',
      };
      const result = await axios.get('http://localhost:3000/api/calc/apartment/1', { params });
      console.log({ result });
    })();
  }, []);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);

        const actionType = data.get('actionType') as ActionType;
        const price = +(data.get('price') as string);
        if (!actionType || !price) return;
        try {
          const params: { actionType: ActionType; price: number } = {
            actionType,
            price,
          };
          const result = await axios.get<number>('http://localhost:3000/api/calc/brokerage', {
            params,
          });
          setBrokerage(result.data);
        } catch (error) {
          console.error(error);
        }
      }}
    >
      <label htmlFor="actionType" style={{ display: 'flex', columnGap: '10px' }}>
        <span>
          <input value="PURCHASE" type="radio" name="actionType" id="PURCHASE" />
          <label htmlFor="PURCHASE">매매</label>
        </span>
        <span>
          <input value="RENT" type="radio" name="actionType" id="RENT" />
          <label htmlFor="RENT">임대차</label>
        </span>
      </label>
      <input type="number" name="price" placeholder="금액을 입력하세요" />
      <button type="submit">확인</button>
      <span>수수료: {brokerage?.toLocaleString()}원</span>
    </form>
  );
}

export default Home;
