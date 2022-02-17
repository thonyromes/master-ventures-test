import { useEffect, useState } from 'react';
import { useBallotsGet } from '../useBallotsGet';

import { NomineeType } from '../useBallotsGet/types';

export type SelectedNomineeType = {
  categoryId: string;
  categoryTitle: string;
  nominee: NomineeType;
};

const useHome = () => {
  const [selectedNomineeData, setSelectedNomineeData] = useState<
    SelectedNomineeType[]
  >([]);

  const { ballots, isLoadingBallot, ballotsError, hasBallots, getBallots } =
    useBallotsGet();

  const onSelectNomineeCategory =
    (categoryId: string, categoryTitle: string) => (nominee: NomineeType) => {
      const nomineeData = {
        categoryId,
        categoryTitle,
        nominee,
      };

      const filteredSelections = selectedNomineeData.filter(
        (item) => item.categoryId !== categoryId,
      );

      setSelectedNomineeData([...filteredSelections, nomineeData]);
    };

  const hasSelectedNominees = selectedNomineeData.length !== 0;

  useEffect(() => {
    getBallots();
  }, [getBallots]);

  return {
    ballots,
    isLoadingBallot,
    ballotsError,
    hasBallots,
    onSelectNomineeCategory,
    hasSelectedNominees,
    selectedNomineeData,
  };
};
export { useHome };
