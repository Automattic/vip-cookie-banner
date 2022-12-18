import { DoNotSellDialog as AutomatticDoNotSellDialog } from '@automattic/privacy-toolset';
import React, { useCallback, useEffect, useState } from 'react';
import { useDoNotSell } from '../../utils';
import { useDoNotSellContent } from './use-do-not-sell-content';

type Props = {
	isOpen: boolean;
	onClose: () => void;
	onToggleActive: (isActive: boolean) => void;
	isActive: boolean;
};

const DoNotSellDialogContainer = ({ isOpen, ...props }: Props) => {
	const content = useDoNotSellContent();
	return (
		<AutomatticDoNotSellDialog
			isOpen={isOpen}
			content={content}
			modalProps={{
				bodyOpenClassName: null,
			}}
			{...props}
		/>
	);
};

const DoNotSellDialog = () => {
	const { shouldSeeDoNotSell, isDoNotSell, onSetDoNotSell } = useDoNotSell();
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const openDialog = useCallback(() => {
		setIsDialogOpen(true);
	}, []);
	const closeDialog = useCallback(() => {
		setIsDialogOpen(false);
	}, []);

	useEffect(() => {
		document.querySelectorAll('p').forEach((element) => (element.onclick = () => openDialog()));
	});

	return (
		<>
			{shouldSeeDoNotSell && (
				<DoNotSellDialogContainer
					isOpen={isDialogOpen}
					isActive={isDoNotSell}
					onToggleActive={onSetDoNotSell}
					onClose={closeDialog}
				/>
			)}
		</>
	);
};

export default DoNotSellDialog;
