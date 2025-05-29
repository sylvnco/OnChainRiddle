import "@testing-library/jest-dom/vitest"; 
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { vi, describe, it, afterEach, expect } from "vitest";
import { useAccount, useConnect } from "wagmi";


vi.mock("wagmi", async () => {
  const actual = await vi.importActual<typeof import("wagmi")>("wagmi");
  return {
    ...actual,
    useAccount: vi.fn(),
    useConnect: vi.fn(),
    useWaitForTransactionReceipt: vi.fn(),
  };
});

const mockUseAccount = vi.mocked(useAccount);
const mockUseConnect = vi.mocked(useConnect);

describe("<Home />", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("shows RiddleFormUnlogged when wallet not connected", () => {
    mockUseConnect.mockReturnValue({
        connect: vi.fn()
      } as any);
    mockUseAccount.mockReturnValue({ isConnected: false, address: undefined } as any);
    render(<Home />);
    expect(screen.getByTestId("riddle-form-unlogged")).toBeInTheDocument();
  });

});
