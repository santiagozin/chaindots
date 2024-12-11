import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Search from "../pages/home/search";
import { AppContext } from "../context/WeatherContext";

describe("Search", () => {
  const mockSetDataWeather = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderSearch = () => {
    return render(
      <BrowserRouter>
        <AppContext.Provider value={{ setDataWeather: mockSetDataWeather }}>
          <Search />
        </AppContext.Provider>
      </BrowserRouter>
    );
  };

  test("renderiza el input de búsqueda", () => {
    renderSearch();
    expect(screen.getByLabelText("Ciudad")).toBeInTheDocument();
  });

  test("muestra las ciudades sugeridas", () => {
    renderSearch();
    const cities = ["Londres", "Buenos Aires", "Madrid"];
    cities.forEach((city) => {
      expect(screen.getByText(city)).toBeInTheDocument();
    });
  });

  test("actualiza el valor del input al escribir", () => {
    renderSearch();
    const input = screen.getByLabelText("Ciudad");
    fireEvent.change(input, { target: { value: "paris" } });
    expect(input.value).toBe("Paris");
  });

  test("maneja la búsqueda correctamente", async () => {
    renderSearch();
    const input = screen.getByLabelText("Ciudad");
    fireEvent.change(input, { target: { value: "Paris" } });

    const searchButton = screen.getByRole("button", { name: /search/i });
    fireEvent.click(searchButton);
  });
});
