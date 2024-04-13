export function Snowflake({ color = 'currentColor' }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00033 2.16797C8.13293 2.16797 8.26011 2.22065 8.35388 2.31442C8.44765 2.40818 8.50033 2.53536 8.50033 2.66797V4.78464L9.98033 3.30464C10.0261 3.25551 10.0813 3.21611 10.1426 3.18878C10.204 3.16145 10.2702 3.14676 10.3373 3.14557C10.4044 3.14439 10.4711 3.15674 10.5334 3.18189C10.5956 3.20703 10.6522 3.24446 10.6997 3.29194C10.7472 3.33942 10.7846 3.39598 10.8097 3.45824C10.8349 3.5205 10.8472 3.58718 10.8461 3.65432C10.8449 3.72145 10.8302 3.78766 10.8028 3.84899C10.7755 3.91033 10.7361 3.96553 10.687 4.0113L8.50033 6.19864V7.5013H9.78366L11.9803 5.30464C12.0261 5.25551 12.0813 5.21611 12.1426 5.18878C12.204 5.16145 12.2702 5.14676 12.3373 5.14557C12.4044 5.14439 12.4711 5.15674 12.5334 5.18189C12.5956 5.20703 12.6522 5.24446 12.6997 5.29194C12.7472 5.33942 12.7846 5.39598 12.8097 5.45824C12.8349 5.5205 12.8472 5.58718 12.8461 5.65432C12.8449 5.72145 12.8302 5.78766 12.8028 5.84899C12.7755 5.91033 12.7361 5.96553 12.687 6.0113L11.1977 7.5013H13.3337C13.4663 7.5013 13.5934 7.55398 13.6872 7.64775C13.781 7.74152 13.8337 7.86869 13.8337 8.0013C13.8337 8.13391 13.781 8.26109 13.6872 8.35486C13.5934 8.44862 13.4663 8.5013 13.3337 8.5013H11.217L12.687 9.9713C12.7361 10.0171 12.7755 10.0723 12.8028 10.1336C12.8302 10.1949 12.8449 10.2612 12.8461 10.3283C12.8472 10.3954 12.8349 10.4621 12.8097 10.5244C12.7846 10.5866 12.7472 10.6432 12.6997 10.6907C12.6522 10.7381 12.5956 10.7756 12.5334 10.8007C12.4711 10.8259 12.4044 10.8382 12.3373 10.837C12.2702 10.8358 12.204 10.8212 12.1426 10.7938C12.0813 10.7665 12.0261 10.7271 11.9803 10.678L9.80299 8.5013H8.50033V9.78464L10.687 11.9713C10.7361 12.0171 10.7755 12.0723 10.8028 12.1336C10.8302 12.1949 10.8449 12.2612 10.8461 12.3283C10.8472 12.3954 10.8349 12.4621 10.8097 12.5244C10.7846 12.5866 10.7472 12.6432 10.6997 12.6907C10.6522 12.7381 10.5956 12.7756 10.5334 12.8007C10.4711 12.8259 10.4044 12.8382 10.3373 12.837C10.2702 12.8358 10.204 12.8212 10.1426 12.7938C10.0813 12.7665 10.0261 12.7271 9.98033 12.678L8.50033 11.1986V13.3346C8.50033 13.4672 8.44765 13.5944 8.35388 13.6882C8.26011 13.782 8.13293 13.8346 8.00033 13.8346C7.86772 13.8346 7.74054 13.782 7.64677 13.6882C7.553 13.5944 7.50033 13.4672 7.50033 13.3346V11.1986L6.02033 12.6786C5.92554 12.767 5.80018 12.815 5.67064 12.8128C5.54111 12.8105 5.41752 12.758 5.32591 12.6664C5.2343 12.5748 5.18183 12.4512 5.17954 12.3217C5.17726 12.1921 5.22534 12.0668 5.31366 11.972L7.50033 9.78464V8.5013H6.19766L4.02033 10.6786C3.92554 10.767 3.80018 10.815 3.67064 10.8128C3.54111 10.8105 3.41752 10.758 3.32591 10.6664C3.2343 10.5748 3.18183 10.4512 3.17954 10.3217C3.17726 10.1921 3.22534 10.0668 3.31366 9.97197L4.78366 8.5013H2.66699C2.53438 8.5013 2.40721 8.44862 2.31344 8.35486C2.21967 8.26109 2.16699 8.13391 2.16699 8.0013C2.16699 7.86869 2.21967 7.74152 2.31344 7.64775C2.40721 7.55398 2.53438 7.5013 2.66699 7.5013H4.80299L3.31366 6.01197C3.22534 5.91719 3.17726 5.79182 3.17954 5.66229C3.18183 5.53275 3.2343 5.40916 3.32591 5.31755C3.41752 5.22595 3.54111 5.17347 3.67064 5.17119C3.80018 5.1689 3.92554 5.21698 4.02033 5.3053L6.21699 7.5013H7.50033V6.19864L5.31366 4.01197C5.26453 3.96619 5.22513 3.91099 5.1978 3.84966C5.17048 3.78833 5.15578 3.72212 5.1546 3.65498C5.15341 3.58785 5.16576 3.52116 5.19091 3.4589C5.21606 3.39664 5.25349 3.34009 5.30097 3.29261C5.34845 3.24513 5.405 3.2077 5.46726 3.18255C5.52952 3.15741 5.59621 3.14506 5.66334 3.14624C5.73048 3.14743 5.79668 3.16212 5.85802 3.18945C5.91935 3.21678 5.97455 3.25618 6.02033 3.3053L7.50033 4.78464V2.66797C7.50033 2.53536 7.553 2.40818 7.64677 2.31442C7.74054 2.22065 7.86772 2.16797 8.00033 2.16797Z"
        fill={color}
      />
    </svg>
  );
}
