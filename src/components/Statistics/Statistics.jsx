import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const arrIcon = [
  <FaRegThumbsUp />,
  <GiTreeDoor />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
];

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <div>
        <StatisticTitle>{title}</StatisticTitle>

        <StatisticsList>
          {stats.map((stat, idx) => {
            return (
              <StatisticItem
                key={stat.id}
                title={stat.title}
                total={stat.total}
                icon={arrIcon[idx]}
              />
            );
          })}
        </StatisticsList>
      </div>
    </>
  );
};
