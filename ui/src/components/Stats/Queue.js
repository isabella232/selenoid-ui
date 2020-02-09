import React from "react";
import styled from "styled-components/macro";
import { StatsElement } from "./StatsElement";

const StyledQueue = styled(StatsElement)`
    width: auto;
    min-width: 45px;

    .queued {
        flex: 2;
        font-weight: 300;
        font-size: 2em;
    }
`;

const Queue = ({ queued = "?" }) => {
    return (
        <StyledQueue title="How many requests on top of quota are waiting for a slot to be free">
            <div className="title">QUEUED</div>
            <div className="queued">{queued}</div>
        </StyledQueue>
    );
};

export default Queue;
