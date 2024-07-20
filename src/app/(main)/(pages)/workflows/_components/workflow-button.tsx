'use client'

import React from 'react';
import Workflowform from '@/components/forms/workflow-form';
import CustomModal from '@/components/global/custom-modal';
import { Button } from '@/components/ui/button';
import { useModal } from '@/provider/modal-provider';
import { Plus } from 'lucide-react';

type Props = {}

const WorkflowButton = (props: Props) => {
    const { setOpen, setClose } = useModal()

    const handleClick = () => {
        setOpen(
          <CustomModal
            title="Create a Workflow Automation"
            subheading="Workflows are powerful tools that help you automate tasks."
          >
            <Workflowform />
          </CustomModal>
        );
    };

    return (
        <Button
          size='icon'
          onClick={handleClick}
        >
          <Plus />
        </Button>
    );
};

export default WorkflowButton;
