export default function useContentPage() {
  const route = useRoute();
  return useAsyncData(route.path, () =>
    queryCollection("content").path(route.path).first()
  );
}
