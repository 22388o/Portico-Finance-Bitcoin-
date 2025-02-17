import React from 'react';
import { useConnectForAuth } from '../lib/auth';

// Landing page with Stacks Connect for authentication

export default function LandingAtomic(props) {
  const { handleOpenAuth } = useConnectForAuth();

  return (
    <div className="Landing">
      <div className="jumbotron jumbotron-fluid pt-3 mb-0">
        <div className="container pt-3">
          <h1>Atomic Swaps</h1>
          <p className="h5">
            Swap your digital assets on Stacks in a trustless way using escrow smart contracts.
          </p>
          <p className="h5">
            This site provides a UI to create and handle trustless swaps between STX and fungible
            tokens on the Stacks chain.
          </p>
          <h2 className="mt-4">Create Swap</h2>
          <p className="h5">
            After agreeing on Terms and Conditions off-chain, the buyer creates a swap and sends the
            tokens to the contract in escrow.
          </p>
          <h2 className="mt-4">Submit Swap</h2>
          <p className="h5">
            The seller executes the atomic swap and receives the STX, the buyer receives the
            fungible tokens from escrow.
          </p>
          <button
            className="btn btn-lg btn-outline-primary mt-4"
            type="button"
            onClick={handleOpenAuth}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
