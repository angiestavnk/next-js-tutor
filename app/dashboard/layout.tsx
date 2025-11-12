import SideNav from '@/app/ui/dashboard/sidenav';

//the pages inside /dashboard will automatically be nested inside a <Layout />
// One benefit of using layouts in Next.js is that on navigation, only the page components update while the layout won't re-render. 
// This is called partial rendering which preserves client-side React state in the layout when transitioning between pages.

// This is called a root layout and is required in every Next.js application. 
// Any UI you add to the root layout will be shared across all pages in your application. 
// You can use the root layout to modify your <html> and <body> tags, and add metadata (you'll learn more about metadata in a later chapter).


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
